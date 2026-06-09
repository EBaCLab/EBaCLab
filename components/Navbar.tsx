import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">

        <a
          href="/"
          className="flex items-center gap-3 md:gap-5"
        >
          <Image
            src="/bournemouth.jpg"
            alt="Bournemouth University"
            width={120}
            height={40}
            className="object-contain h-auto md:w-[170px]"
            priority
          />

          <div className="hidden md:block h-10 w-px bg-gray-300" />

          <div>
            <div className="text-lg md:text-xl font-semibold tracking-tight">
              EBaC Lab
            </div>

            <div className="hidden md:block text-xs text-gray-500 uppercase tracking-[0.15em]">
              Eyes, Brain & Cognition
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.15em]">

          <a
            href="/research"
            className="hover:text-gray-500 transition-colors"
          >
            Research
          </a>

          <a
            href="/people"
            className="hover:text-gray-500 transition-colors"
          >
            People
          </a>

          <a
            href="/publications"
            className="hover:text-gray-500 transition-colors"
          >
            Publications
          </a>

          <a
            href="/contact"
            className="hover:text-gray-500 transition-colors"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  );
}