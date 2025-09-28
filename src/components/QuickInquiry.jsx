"use client";
import { useState } from "react";
import { CalendarDays, Loader2 } from "lucide-react"; // Loader2 = spinner
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_4q5e4fi";
const TEMPLATE_ID = "template_qa4z89s";
const PUBLIC_KEY = "YmA1JtCi_b0X3JmpT";

export default function QuickInquiryForm() {
  const [form, setForm] = useState({
    eventType: "Wedding",
    date: "",
    location: "",
    budget: "",
    contact: "",
  });

  const [toast, setToast] = useState(null); // 👈 Toast state
  const [loading, setLoading] = useState(false); // 👈 Loading state

  function showToast(message, type = "success") {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); // Auto-hide after 3s
  }

  function submitQuick(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          eventType: form.eventType,
          date: form.date,
          location: form.location,
          budget: form.budget,
          contact: form.contact,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          showToast("✅ Your inquiry has been sent! Our team will contact you soon.", "success");
          setForm({
            eventType: "Wedding",
            date: "",
            location: "",
            budget: "",
            contact: "",
          });
          setLoading(false);
        },
        (error) => {
          console.error("FAILED...", error);
          showToast("❌ Unable to send. Kindly contact us at the phone number provided in the Contact section below.",
          "error");
          setLoading(false);
        }
      );
  }

  return (
    <div className="relative -mt-10 md:-mt-12">
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

      <form
        onSubmit={submitQuick}
        className="mx-auto max-w-5xl bg-white shadow-xl border border-neutral-200 rounded-2xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-5 gap-3"
      >
        <div>
          <label className="text-xs font-medium text-neutral-600">Event Type</label>
          <select
            className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-2 focus:ring-neutral-900"
            value={form.eventType}
            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
          >
            <option>Wedding</option>
            <option>Pre-Wedding</option>
            <option>Engagement</option>
            <option>Portrait</option>
            <option>Corporate</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-600">Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-2 focus:ring-neutral-900"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-600">Location</label>
          <input
            placeholder="City / Venue"
            className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-2 focus:ring-neutral-900"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
          />
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-600">Budget</label>
          <select
            className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-2 focus:ring-neutral-900"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          >
            <option value="">Select</option>
            <option>₹50k–₹1.5L</option>
            <option>₹1.5L–₹3L</option>
            <option>₹3L–₹5L</option>
            <option>₹5L+</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-medium text-neutral-600">Phone / Email</label>
          <input
            placeholder="Your contact"
            className="mt-1 w-full rounded-lg border-neutral-300 focus:ring-2 focus:ring-neutral-900"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
          />
        </div>

        <div className="md:col-span-5 flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`mt-1 inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white ${
              loading
                ? "bg-neutral-600 cursor-not-allowed"
                : "bg-neutral-900 hover:bg-neutral-800"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Check Availability <CalendarDays className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
