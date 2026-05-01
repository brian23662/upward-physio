"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  /** When true, plays immediately on mount (used on dedicated service hero). */
  autoPlayImmediately?: boolean;
  className?: string;
  /** Optional aspect ratio class — defaults to a flexible 4/5 portrait that suits vertical clips. */
  aspectClassName?: string;
}

/**
 * Plays the video exactly once when its container enters the viewport.
 * Uses Intersection Observer with a small threshold so it doesn't fire
 * prematurely. Falls back to immediate play if `autoPlayImmediately` is set.
 *
 * Videos are muted + playsInline so iOS allows autoplay without user gesture.
 */
export function VideoPlayer({
  src,
  autoPlayImmediately = false,
  className,
  aspectClassName = "aspect-[4/5]",
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (autoPlayImmediately) {
      // For dedicated pages — let it play as soon as it can.
      video.play().catch(() => {
        // Autoplay may be blocked; that's fine, the controls are still there
        // if needed. We swallow the error silently.
      });
      hasPlayedRef.current = true;
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            video.currentTime = 0;
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  hasPlayedRef.current = true;
                })
                .catch(() => {
                  // Browser blocked autoplay; nothing we can do silently.
                });
            } else {
              hasPlayedRef.current = true;
            }
          }
        });
      },
      // Trigger when ~30% of the video is on screen
      { threshold: 0.3, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlayImmediately]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden rounded-2xl bg-[#f4f4f4] group",
        aspectClassName,
        className
      )}
    >
      {/* Solid placeholder while video loads — matches surrounding background */}
      <div
        className={cn(
          "absolute inset-0 bg-[#f4f4f4] transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100"
        )}
      />
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="metadata"
        // We never want it to loop — spec says play exactly once.
        loop={false}
        onLoadedData={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
