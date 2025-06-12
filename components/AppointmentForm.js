"use client";

import { useState } from "react";

export default function AppointmentForm({contact}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);

  
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
      setSuccessMessage("Message successfully sent!");

     
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }, 1500);
  };

  return (
    <section className="w-full bg-[#0A2540] py-16 md:py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center mb-12 text-white">
  <h2 className="text-3xl font-bold text-[var(--gold)] mb-2">{contact ? ("CONTACT"):("Request an Appointment")}</h2>
  {contact ? (null) : (<p className="text-white-700 text-lg">
    Fill out the form below and we&apos;ll be in touch to schedule your session.
  </p>)}
  <p className="text-sm text-gray-200 mt-2 italic">
    Please do not include personal health information in your message. This form is not HIPAA-compliant.
  </p>
</div>


    
      {successMessage && (
        <div
          className="max-w-3xl mx-auto mb-6 text-center text-green-600 font-semibold transition-opacity duration-500 opacity-100 animate-fade-in"
        >
          {successMessage}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-6 bg-white p-8 rounded-xl shadow-lg"
      >
    
        <div className="flex flex-col text-left">
          <label className="mb-2 font-semibold text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            required
          />
        </div>

      
        <div className="flex flex-col text-left">
          <label className="mb-2 font-semibold text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            required
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="mb-2 font-semibold text-gray-700">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            required
          />
        </div>


        <div className="flex flex-col text-left">
          <label className="mb-2 font-semibold text-gray-700">Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 text-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`cursor-pointer bg-[var(--gold)] hover:bg-yellow-400 text-white font-semibold py-3 px-8 rounded shadow-md transition flex items-center justify-center ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send Request"
            )}
          </button>
        </div>
      </form>

  
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
