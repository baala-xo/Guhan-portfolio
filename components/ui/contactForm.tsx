// components/ContactForm.tsx

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mgvkeonq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div>
        <label htmlFor="name" className="block text-lg mb-2 font-medium">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border-2 border-muted py-3 px-4 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors rounded-md"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-lg mb-2 font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
          placeholder="Your Email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-lg mb-2 font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b-2 border-input py-3 text-xl bg-transparent focus:outline-none focus:border-primary transition-colors"
          placeholder="Your Message"
        />
      </div>
      <Button type="submit" size="lg" className="text-lg px-8 w-full md:w-auto">
        Send Message
      </Button>

      {status === "SUCCESS" && (
        <p className="text-green-600 text-lg mt-4">Thank you! Your message has been sent.</p>
      )}
      {status === "ERROR" && (
        <p className="text-red-600 text-lg mt-4">Oops! Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
