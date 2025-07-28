"use client";

import type React from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LiquidGlassButton from "@/components/LiquidGlassButton";
import { contactInfo } from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.error || "Something went wrong");
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Email sent successfully:", data);
        alert("Thank you for your message! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter mb-3">Contact</h2>
        <Separator className="w-12 h-1 bg-black dark:bg-white" />
        <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl">
          Have a question or want to work together? Feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-gray-200/60 dark:border-neutral-800/60 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+11234567890"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-2 border border-gray-200 dark:border-neutral-800">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {contactInfo.location}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-xl bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-gray-200/60 dark:border-neutral-800/60 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Send a Message
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-gray-200 dark:border-neutral-800 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-gray-200 dark:border-neutral-800 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="rounded-lg border-gray-200 dark:border-neutral-800 bg-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-lg border-gray-200 dark:border-neutral-800 bg-transparent"
                ></Textarea>
              </div>

              <LiquidGlassButton type="submit">
                <Send size={16} className="mr-2" /> Send Message
              </LiquidGlassButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
