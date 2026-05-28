"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { sendEmail } from "@/app/actions/email";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await sendEmail({ name, email, message });
      if (result.success) {
        toast.success("Form submitted successfully.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(result.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="name"
        >
          Full name
        </label>
        <input
          required
          onChange={handleChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          className="shadow-input rounded-md border border-neutral-400 bg-neutral-200 px-2 py-2 text-sm focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          required
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          className="shadow-input rounded-md border border-neutral-400 bg-neutral-200 px-2 py-2 text-sm focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>
      <div className="flex flex-col">
        <label
          className="text-sm font-medium tracking-tight text-neutral-600"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          required
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="shadow-input min-h-40 resize-none rounded-md border border-neutral-400 bg-neutral-200 px-2 py-1 text-sm focus:ring-2 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800"
        />
      </div>
      <button
        className="bg-primary cursor-pointer rounded-md px-4 py-2 text-sm font-medium text-white transition-all hover:bg-neutral-950 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
