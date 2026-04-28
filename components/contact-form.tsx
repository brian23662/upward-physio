"use client";

import { useState, useTransition } from "react";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/lib/use-toast";
import { SERVICES, type ServiceSlug } from "@/lib/services";
import { submitContact } from "@/app/actions/contact";

interface ContactFormProps {
  /** Pre-select a specialty when this form lives on a service page. */
  defaultSpecialty?: ServiceSlug;
}

export function ContactForm({ defaultSpecialty }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [specialty, setSpecialty] = useState<string>(defaultSpecialty || "");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await submitContact({
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        specialty: specialty,
        message: String(formData.get("message") || ""),
      });

      if (result.ok) {
        toast({
          title: "Message sent",
          description: result.message,
          variant: "success",
        });
        setSubmitted(true);
      } else {
        toast({
          title: "Couldn't send your message",
          description: result.message,
          variant: "destructive",
        });
      }
    });
  }

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 border border-brand-teal/20 rounded-2xl bg-brand-teal/5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-white mb-4">
          <ArrowUpRight className="h-5 w-5" />
        </div>
        <h3 className="font-display text-2xl text-brand-ink mb-2">
          Message received
        </h3>
        <p className="text-brand-ink/60 max-w-md mx-auto">
          Thanks for reaching out. DJ will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      action={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6"
    >
      <div className="sm:col-span-1">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          autoComplete="name"
        />
      </div>

      <div className="sm:col-span-1">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          autoComplete="email"
        />
      </div>

      <div className="sm:col-span-1">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          autoComplete="tel"
        />
      </div>

      <div className="sm:col-span-1">
        <Label htmlFor="specialty">Specialty</Label>
        <Select value={specialty} onValueChange={setSpecialty}>
          <SelectTrigger id="specialty" className="mt-1">
            <SelectValue placeholder="Choose a specialty" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service.slug} value={service.slug}>
                {service.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          placeholder="Tell DJ a bit about what you're looking for…"
        />
      </div>

      <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-4">
        <p className="text-xs text-brand-ink/40 max-w-xs">
          Replies typically within one business day.
        </p>
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              Send message <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
