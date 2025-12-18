import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message: string;
}

export default function ReservationPage() {
  const [form, setForm] = useState<ReservationForm>({
    name: " ",
    email: " ",
    phone: " ",
    date: " ",
    time: " ",
    guests: 1,
    message: " ",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "guests" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send reservation");
      }

      alert("✅ Reservation sent successfully!");
      setForm({
        name: " ",
        email: " ",
        phone: " ",
        date: " ",
        time: " ",
        guests: 1,
        message: " ",
      });
    } catch (error) {
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-restaurant-darker flex items-center justify-center p-6 mt-24">
        <div className="bg-black shadow-2xl rounded-2xl max-w-2xl w-full p-8">
          <h1 className="text-3xl font-bold text-center text-primary mb-6">
            🍽️ Reserve Your Table
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg text-gray-900 z-10"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg text-gray-900 z-10 "
                placeholder="john@example.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg text-gray-900 z-10"
                placeholder="+250 78 123 4567"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg text-gray-900 z-10 "
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Time</label>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg text-gray-900 z-10"
                />
              </div>
            </div>

            {/* Guests */}
            <div>
              <label className="block font-medium mb-1">Number of Guests</label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-gray-900 z-10"
              >
                {[1,2,3,4,5,6,7,8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Person" : "People"}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">More Details</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg text-gray-900 z-10"
                placeholder="Special requests, events, etc."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90"
            >
              {loading ? "Sending..." : "Reserve Table"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}
