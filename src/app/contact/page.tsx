import type { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mayank Chandak for research collaborations, full-time roles, and technical conversations.",
};

export default function ContactPage() {
  return (
    <section className="container contact-layout" aria-labelledby="contact-title">
      <div className="contact-statement">
        <div className="page-index mb-8">05 /</div>
        <h1 id="contact-title">
          Let&apos;s build
          <br />
          something
          <br />
          remarkable.
        </h1>
        <p>Open to research collaborations, full-time roles, and interesting conversations.</p>
        <div className="contact-links">
          <a className="contact-link" href="mailto:mayank.chandak21@gmail.com">
            <Mail size={18} /> mayank.chandak21@gmail.com
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/mayank-chandak-8abb382ab/" target="_blank" rel="noreferrer">
            <ExternalLink size={18} /> LinkedIn [external]
          </a>
          <a className="contact-link" href="https://github.com/mnm-21" target="_blank" rel="noreferrer">
            <ExternalLink size={18} /> GitHub [external]
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
