"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Loader2 } from "lucide-react"; 
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4q5e4fi";
const TEMPLATE_ID = "template_qa4z89s";
const PUBLIC_KEY = "YmA1JtCi_b0X3JmpT";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  function showToast(message, type = "success") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  }

  function submitContact(e) {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.phone || !form.city || !form.type || !form.message) {
      showToast("⚠️ Please fill in all the required fields.", "error");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          city: form.city,
          type: form.type,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          showToast("✅ Your inquiry has been sent! Our team will contact you soon.", "success");
          setForm({
            name: "",
            email: "",
            phone: "",
            city: "",
            type: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          showToast(
            "❌ Unable to send. Kindly contact us at the phone number provided below.",
            "error"
          );
          setLoading(false);
        }
      );
  }

  return (
    <section id="contact" className="bg-neutral-950 text-white">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white transition-opacity duration-500 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <form onSubmit={submitContact} className="grid gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s create something beautiful together
          </h2>
          <p className="mt-2 text-neutral-300">
            Share a few details and we’ll respond within 24 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <input
              required
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              required
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              required
              placeholder="City / Venue"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          <select
            required
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <option value="">Select Event Type</option>
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Engagement</option>
            <option>Portrait</option>
            <option>Corporate</option>
          </select>

          <textarea
            required
            rows={5}
            placeholder="Tell us about your event"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            disabled={loading}
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition ${
              loading
                ? "bg-neutral-700 text-neutral-400 cursor-not-allowed"
                : "bg-white text-neutral-900 hover:bg-neutral-100"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Enquiry"
            )}
          </button>
        </form>

        {/* Contact Info + Instagram */}
        <div className="grid gap-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold">Studio</h3>
            <p className="mt-2 text-neutral-300 flex items-center gap-2">
              <MapPin className="h-4 w-4" /> New Delhi, India
            </p>
            <p className="mt-1 text-neutral-300 flex items-center gap-2">
              <Phone className="h-4 w-4" />{" "}
              <a href="tel:+918745892676" className="hover:underline">
                +91 87458 92676
              </a>
            </p>
            <p className="mt-1 text-neutral-300 flex items-center gap-2">
              <Mail className="h-4 w-4" />{" "}
              <a href="mailto:editorschoicestudio1@gmail.com" className="hover:underline">
                editorschoicestudio1@gmail.com
              </a>
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
            <h3 className="font-semibold flex items-center gap-2">
              <Instagram className="h-5 w-5" /> Instagram Feed
            </h3>
            <p className="mt-2 text-neutral-400 text-sm">
              Embed your live Instagram grid here (LightWidget / EmbedSocial) or update with latest posts.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <img
                src="/images/weddings.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="/images/A11.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="/images/A13.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="/images/A13.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="/images/A31.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
              <img
                src="/images/A13.jpg"
                alt="ig"
                className="h-24 w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
