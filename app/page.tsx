export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pt-14 pb-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm tracking-wide opacity-70">Debbie’s Wave Salon</p>
            <p className="text-xs opacity-60">Cuts • Color • Style</p>
          </div>

          <a href="#book" className="btn btn-ghost">
            Book
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              A fresh look,
              <span className="block opacity-70">made effortless.</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 opacity-70">
              A warm, welcoming salon experience with results you’ll love.
              Book online or call — we’ll take care of you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#book" className="btn btn-primary">
                Book an appointment
              </a>
              <a href="#services" className="btn btn-ghost">
                View services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm opacity-70">
              <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Mon–Sat 10–5
              </span>
              <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Walk-ins when available
              </span>
              <span className="rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                Friendly + professional
              </span>
            </div>
          </div>

          <div className="card p-7">
            <div className="aspect-[4/3] w-full rounded-2xl border border-black/10 bg-black/5 dark:border-white/15 dark:bg-white/5" />
            <p className="mt-4 text-sm opacity-70">
              Add a hero photo here later (we can drop a salon image into /public).
            </p>
          </div>
        </div>
      </header>

      <section id="services" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
          <p className="text-sm opacity-60">Prices can be added anytime</p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Cuts</h3>
            <p className="mt-2 opacity-70">Women • Men • Kids • Blowouts</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Color</h3>
            <p className="mt-2 opacity-70">Root touch-up • Highlights • All-over</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold">Treatments</h3>
            <p className="mt-2 opacity-70">Repair • Hydration • Shine</p>
          </div>
        </div>
      </section>

      <section id="book" className="border-t border-black/10 dark:border-white/15 bg-white/60 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-semibold tracking-tight">Book</h2>
          <p className="mt-2 max-w-2xl opacity-70">
            Add your booking link (Square / GlossGenius / Vagaro). For now, you can
            wire the buttons to a placeholder.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              className="btn btn-primary"
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
            >
              Book Online
            </a>
            <a className="btn btn-ghost" href="tel:+1XXXXXXXXXX">
              Call the salon
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3 text-sm opacity-70">
            <div>
              <p className="font-semibold opacity-90">Hours</p>
              <p className="mt-2">Mon–Sat: 10–5</p>
              <p>Sun: Closed</p>
            </div>
            <div>
              <p className="font-semibold opacity-90">Location</p>
              <p className="mt-2">Add address here</p>
              <p>City, State</p>
            </div>
            <div>
              <p className="font-semibold opacity-90">Social</p>
              <p className="mt-2 underline">Instagram</p>
              <p className="underline">Facebook</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm opacity-60">
        © {new Date().getFullYear()} Debbie’s Wave Salon
      </footer>
    </main>
  );
}
