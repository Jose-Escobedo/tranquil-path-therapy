'use client';

export default function Hero() {
  return (
    <section
      className="relative py-40 px-6 text-center text-white min-h-screen flex items-center"
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/ilya-pavlov-XPT-OtA0E-8-unsplash.jpg?alt=media&token=ddca0a61-41b6-4640-bddd-1321921e63a6')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Golden Scales Family Therapy</h1>
        <p className="text-lg mb-6">
          Helping families find balance, healing, and harmony through compassionate counseling.
        </p>
        <a
          href="#contact"
          className="bg-[var(--gold)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}
