export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="mx-auto max-w-5xl px-6 pt-14 pb-10">
        <p className="text-sm font-medium tracking-wide text-zinc-600">
          Debbie’s Wave Salon
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          Beautiful hair,
          <span className="block text-zinc-600">easy booking.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
          Classic service with a modern vibe. Cuts, color, and styling tailored to you.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800"
          >
            Book an appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:bg-zinc-100"
          >
            View services
          </a>
        </div>
      </header>

      <section id="services" className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Cuts</h3>
            <p className="mt-2 text-zinc-600">Women • Men • Kids • Styling</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Color</h3>
            <p className="mt-2 text-zinc-600">All-over • Highlights • Root touch-up</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-semibold">Treatments</h3>
            <p className="mt-2 text-zinc-600">Deep conditioning • Repair • Shine</p>
          </div>
        </div>
      </section>

      <section id="book" className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-semibold">Book</h2>
          <p className="mt-2 text-zinc-600">
            Add your booking link here (Square, GlossGenius, Vagaro, etc.).
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://example.com"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-white font-medium hover:bg-zinc-800"
              target="_blank"
              rel="noreferrer"
            >
              Book Online
            </a>
            <a
              href="tel:+1XXXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 font-medium text-zinc-900 hover:bg-zinc-100"
            >
              Call the salon
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 text-sm text-zinc-600">
            <div>
              <p className="font-medium text-zinc-900">Hours</p>
              <p className="mt-2">Mon–Sat: 10–5</p>
              <p>Sun: Closed</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Location</p>
              <p className="mt-2">Add address here</p>
              <p>City, State</p>
            </div>
            <div>
              <p className="font-medium text-zinc-900">Contact</p>
              <p className="mt-2">(XXX) XXX-XXXX</p>
              <p>hello@debbieswavesalon.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-50">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Debbie’s Wave Salon. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
