'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative py-40 px-6 text-center min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pexels-torsten-kellermann-349167-955656.jpg?alt=media&token=e0b953f9-a06a-4f21-9d15-80ed2c36c72d')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative max-w-3xl w-full bg-white/60 text-[#0A2540] p-10 rounded-xl shadow-lg backdrop-blur-md">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-[#a6794e]">Tranquil Path Therapy </span> 
        </h1>
        <p className="text-lg mb-6">
          Supporting individuals and families through life&apos;s transitions with warmth, clarity, and care.
        </p>
        <a
          href="/contact"
          className="bg-[#a6794e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d0bfae] transition"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
