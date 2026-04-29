"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/Button";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(2, "Subject must be at least 2 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [note, setNote] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: ContactValues) {
    setStatus("loading");
    setNote("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json()) as { success?: boolean; error?: string };
    if (!response.ok || !payload.success) {
      setStatus("error");
      setNote(payload.error || "Message could not be sent.");
      return;
    }

    setStatus("success");
    setNote("Message sent.");
    reset();
    window.setTimeout(() => {
      setStatus("idle");
      setNote("");
    }, 3000);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      {(["name", "email", "subject", "message"] as const).map((field) => (
        <div className="field" key={field}>
          {field === "message" ? (
            <textarea id={field} placeholder=" " rows={6} {...register(field)} />
          ) : (
            <input id={field} placeholder=" " type={field === "email" ? "email" : "text"} {...register(field)} />
          )}
          <label htmlFor={field}>{field[0].toUpperCase() + field.slice(1)}</label>
          {errors[field] ? <div className="field-error">x {errors[field]?.message}</div> : null}
        </div>
      ))}
      <Button type="submit" loading={status === "loading"} icon={Send} className={status === "success" ? "bg-emerald-400" : ""}>
        {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
      </Button>
      {note ? <p className="form-note">{note}</p> : null}
    </form>
  );
}
