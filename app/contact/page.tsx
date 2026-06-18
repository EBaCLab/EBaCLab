import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-20">

      {/* Header */}
      <div className="text-center">

        <Image
          src="/EBaC.jpg"
          alt="EBaC Lab"
          width={220}
          height={220}
          className="mx-auto mb-8"
        />

        <h1 className="text-5xl font-semibold">
          Contact
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          Eyes, Brain and Cognition (EBaC) Lab
        </p>

      </div>

      {/* Address */}
      <section className="mt-20">

        <div className="border rounded-2xl p-8 bg-gray-50">

          <h2 className="text-2xl font-semibold mb-6">
            Address
          </h2>

          <p className="text-gray-700 leading-8">
            Department of Psychology
            <br />
            Bournemouth University
            <br />
            Talbot Campus
            <br />
            Fern Barrow
            <br />
            Poole
            <br />
            Dorset BH12 5BB
            <br />
            United Kingdom
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="https://maps.google.com/?q=Bournemouth+University+Talbot+Campus"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-3 rounded-md hover:bg-gray-100 transition"
            >
              View on Google Maps →
            </a>

            <a
              href="https://www.bournemouth.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-5 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Bournemouth University →
            </a>

          </div>

        </div>

      </section>

      {/* Investigators */}
      <section className="mt-20">

        <h2 className="text-3xl font-semibold mb-10">
          Principal Investigators
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Federica */}
          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Dr Federica Degno
            </h3>

            <p className="text-gray-500 mb-4">
              Senior Lecturer in Psychology
            </p>

            <a
              href="mailto:fdegno@bournemouth.ac.uk"
              className="block hover:underline"
            >
              fdegno@bournemouth.ac.uk
            </a>

            <a
              href="https://orcid.org/0000-0002-9621-9968"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 hover:underline"
            >
              ORCID Profile
            </a>

            <p className="mt-4 text-sm text-gray-600">
              Poole House P104c
            </p>

          </div>

          {/* Julie */}
          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Dr Julie Kirkby
            </h3>

            <p className="text-gray-500 mb-4">
              Principal Academic in Psychology
            </p>

            <p>01202 965251</p>

            <a
              href="mailto:jkirkby@bournemouth.ac.uk"
              className="block mt-2 hover:underline"
            >
              jkirkby@bournemouth.ac.uk
            </a>

            <a
              href="https://orcid.org/0000-0001-6502-0676"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 hover:underline"
            >
              ORCID Profile
            </a>

            <p className="mt-4 text-sm text-gray-600">
              Poole House P104d
            </p>

          </div>

          {/* Otto */}
          <div className="border rounded-2xl p-6">

            <h3 className="text-xl font-semibold mb-2">
              Dr Otto Loberg
            </h3>

            <p className="text-gray-500 mb-4">
              Senior Lecturer in Psychology
            </p>

            <a
              href="mailto:oloberg@bournemouth.ac.uk"
              className="block hover:underline"
            >
              oloberg@bournemouth.ac.uk
            </a>

            <a
              href="https://orcid.org/0000-0001-5012-0818"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 hover:underline"
            >
              ORCID Profile
            </a>

            <p className="mt-4 text-sm text-gray-600">
              Poole House P104b
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}