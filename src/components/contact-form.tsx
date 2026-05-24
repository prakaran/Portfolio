"use client";
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill all the fields.");
      return;
    }
    // call the api to submit the form
    const APICall = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful");
      }, 1000);
    });
    const response = await APICall;
    if (response) {
      toast.success("Form submitted successfully.");
    } else {
      toast.error("Something went wrong.");
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
          onChange={handleChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          className="shadow-input rounded-md border border-neutral-400 bg-neutral-200 px-2 py-2 text-sm focus:ring-2 focus:outline-none"
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
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          name="email"
          placeholder="Enter your email"
          className="shadow-input rounded-md border border-neutral-400 bg-neutral-200 px-2 py-2 text-sm focus:ring-2 focus:outline-none"
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
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className="shadow-input min-h-40 resize-none rounded-md border border-neutral-400 bg-neutral-200 px-2 py-1 text-sm focus:ring-2 focus:outline-none"
        />
      </div>
      <button className="bg-primary rounded-md p-2 text-white" type="submit">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
