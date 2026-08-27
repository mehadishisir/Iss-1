import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <header className="border-b border-white/10">
       <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
  <div className="flex items-center justify-between">
    <a
      href="#"
      className="text-2xl font-bold tracking-tight"
    >
      Biswas<span className="text-cyan-400">.</span>
    </a>

    {/* Desktop Menu */}
    <div className="hidden items-center gap-8 md:flex">
      <a href="#home" className="text-sm text-white transition hover:text-cyan-400">
        Home
      </a>

      <a href="#services" className="text-sm text-slate-300 transition hover:text-cyan-400">
        Services
      </a>

      <a href="#about" className="text-sm text-slate-300 transition hover:text-cyan-400">
        About
      </a>

      <a href="#contact" className="text-sm text-slate-300 transition hover:text-cyan-400">
        Contact
      </a>

      <a
        href="#contact"
        className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Let's Talk
      </a>
    </div>

    {/* Mobile Button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
      aria-label="Toggle menu"
    >
      {menuOpen ? "✕" : "☰"}
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="mt-5 space-y-2 border-t border-white/10 pt-5 md:hidden">
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
      >
        Home
      </a>

      <a
        href="#services"
        onClick={() => setMenuOpen(false)}
        className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
      >
        Services
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
      >
        About
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-400"
      >
        Contact
      </a>
    </div>
  )}
</nav>
      </header>

      {/* Hero */}
      <main id="home">
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            {/* Hero Content */}
            <div>
              <p className="mb-5 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                Digital Solutions Agency
              </p>

              <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                We build digital
                <span className="block text-cyan-400">
                  experiences.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                Biswas helps businesses turn ideas into modern, scalable and
                user-friendly digital products that make a real impact.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start a Project
                </a>

                <a
                  href="#services"
                  className="rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/5"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="rounded-2xl bg-slate-900 p-6">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Our approach</p>
                      <h2 className="mt-1 text-xl font-semibold">
                        Ideas → Impact
                      </h2>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 text-xl">
                      ✦
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">
                        Strategy
                      </p>
                      <p className="mt-2 font-medium">
                        Understand the problem
                      </p>
                    </div>

                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                      <p className="text-sm text-cyan-300">
                        Design & Development
                      </p>
                      <p className="mt-2 font-medium">
                        Build the right solution
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-slate-400">
                        Growth
                      </p>
                      <p className="mt-2 font-medium">
                        Create lasting impact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services */}
<section id="services" className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        What we do
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Services that move your business forward.
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-400">
        From strategy to development, we create digital solutions designed
        around your business goals.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {/* Service 01 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
          ◇
        </div>

        <p className="mt-8 text-sm font-medium text-slate-500">
          01
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          Web Development
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          We build fast, responsive and scalable websites that provide
          seamless experiences across every device.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300"
        >
          Learn more →
        </a>
      </div>

      {/* Service 02 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
          ✦
        </div>

        <p className="mt-8 text-sm font-medium text-slate-500">
          02
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          UI/UX Design
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          We design intuitive and engaging interfaces that turn complex
          ideas into simple and enjoyable user experiences.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300"
        >
          Learn more →
        </a>
      </div>

      {/* Service 03 */}
      <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.06]">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
          ◎
        </div>

        <p className="mt-8 text-sm font-medium text-slate-500">
          03
        </p>

        <h3 className="mt-2 text-2xl font-semibold">
          Digital Solutions
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          We create smart digital solutions that help businesses improve
          their workflow, reach customers and grow faster.
        </p>

        <a
          href="#contact"
          className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition group-hover:text-cyan-300"
        >
          Learn more →
        </a>
      </div>
    </div>
  </div>
</section>

{/* About */}
<section id="about" className="border-t border-white/10">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
    {/* Left */}
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        About Biswas
      </p>

      <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
        Turning ideas into meaningful digital products.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        Biswas is a digital agency focused on creating modern websites
        and digital experiences for businesses of all sizes.
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        We combine thoughtful design, clean development and a
        user-first approach to build solutions that are simple,
        effective and built to grow.
      </p>

      <a
        href="#contact"
        className="mt-8 inline-block rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Work With Us
      </a>
    </div>

    {/* Right */}
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-4xl font-bold text-cyan-400">50+</p>
        <p className="mt-2 text-slate-400">Projects Delivered</p>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-4xl font-bold text-cyan-400">25+</p>
        <p className="mt-2 text-slate-400">Happy Clients</p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-4xl font-bold text-cyan-400">5+</p>
        <p className="mt-2 text-slate-400">Years Experience</p>
      </div>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
        <p className="text-4xl font-bold text-cyan-400">24/7</p>
        <p className="mt-2 text-slate-400">Client Support</p>
      </div>
    </div>
  </div>
</section>
{/* Contact */}
<section id="contact" className="border-t border-white/10">
  <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Contact Info */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Get in touch
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Have a project in mind?
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
          Tell us about your idea and let's create something
          meaningful together.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1 font-medium">hello@biswas.agency</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-1 font-medium">+880 1234-567890</p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Location</p>
            <p className="mt-1 font-medium">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Your Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Subject
          </label>

          <input
            type="text"
            placeholder="How can we help?"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
          />
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Message
          </label>

          <textarea
            rows="5"
            placeholder="Tell us about your project..."
            className="w-full resize-none rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Send Message →
        </button>
      </form>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
<footer className="border-t border-white/10">
  <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
    <div>
      <p className="text-xl font-bold">
        Biswas<span className="text-cyan-400">.</span>
      </p>

      <p className="mt-1 text-sm text-slate-500">
        Building better digital experiences.
      </p>
    </div>

    <p className="text-sm text-slate-500">
      © 2026 Biswas Agency. All rights reserved.
    </p>
  </div>
</footer>
    </div>
  );
}

export default App;