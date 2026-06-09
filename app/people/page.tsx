import Image from "next/image";

export default function PeoplePage() {
  return (
    <main className="max-w-6xl mx-auto px-8 py-20">
      <h1 className="text-5xl font-semibold mb-16">
        People
      </h1>

      <div className="space-y-24">

        {/* Federica */}
        <section className="grid md:grid-cols-[280px_1fr] gap-12">

          <div>
            <Image
              src="/federica.jpg"
              alt="Federica Degno"
              width={280}
              height={280}
              className="rounded-xl object-cover w-full"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold">
              Federica Degno
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">

              <p>Senior Lecturer in Psychology</p>

              <p>
                <a
                  href="mailto:fdegno@bournemouth.ac.uk"
                  className="hover:underline"
                >
                  fdegno@bournemouth.ac.uk
                </a>
              </p>

              <p>
                Poole House P104c, Talbot Campus,
                Fern Barrow, Poole, BH12 5BB
              </p>

            </div>

            <p className="mt-8 leading-8 text-gray-700">
              Federica joined Bournemouth University in 2021 as a
              Lecturer in Psychology after holding a Research Fellowship
              in Cognitive Neuroscience at the University of Central
              Lancashire. She received her BSc and MSc from the
              University of Milano-Bicocca and completed her PhD in
              Psychology at the University of Southampton.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Her research focuses on visual cognition, reading,
              eye movements, and the relationship between behavioural
              and neural measures of language processing. She combines
              eye-tracking, event-related potentials (ERPs), and
              co-registration methods to investigate cognition during
              natural reading.
            </p>

            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Research Interests
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Reading and language processing</li>
                <li>Eye movements</li>
                <li>Visual cognition</li>
                <li>EEG and ERPs</li>
                <li>Fixation-related potentials</li>
              </ul>

              <a
                href="https://orcid.org/0000-0002-9621-9968"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 border px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                ORCID Profile →
              </a>

            </div>

          </div>
        </section>

        {/* Julie */}
        <section className="grid md:grid-cols-[280px_1fr] gap-12 border-t pt-20">

          <div>
            <Image
              src="/julie.jpg"
              alt="Julie Kirkby"
              width={280}
              height={280}
              className="rounded-xl object-cover w-full"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold">
              Julie Kirkby
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">

              <p>Principal Academic in Psychology</p>

              <p>01202 965251</p>

              <p>
                <a
                  href="mailto:jkirkby@bournemouth.ac.uk"
                  className="hover:underline"
                >
                  jkirkby@bournemouth.ac.uk
                </a>
              </p>

              <p>
                Poole House P104d, Talbot Campus,
                Fern Barrow, Poole, BH12 5BB
              </p>

            </div>

            <p className="mt-8 leading-8 text-gray-700">
              Julie joined Bournemouth University in 2010 as a Lecturer
              in Psychology. Her research lies within cognitive psychology,
              with a particular focus on eye movements, reading, and visual
              cognition.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Her work aims to improve understanding of developmental
              dyslexia and the cognitive mechanisms underlying reading
              difficulties. She has collaborated with Microsoft's
              Advanced Reading Technologies team to investigate how
              assistive technologies can improve reading accessibility
              and efficiency for struggling readers.
            </p>

            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Research Interests
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Developmental dyslexia</li>
                <li>Eye movements in reading</li>
                <li>Visual cognition</li>
                <li>Assistive technologies</li>
                <li>Educational psychology</li>
              </ul>

              <a
                href="https://orcid.org/0000-0001-6502-0676"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 border px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                ORCID Profile →
              </a>

            </div>

          </div>
        </section>

        {/* Otto */}
        <section className="grid md:grid-cols-[280px_1fr] gap-12 border-t pt-20">

          <div>
            <Image
              src="/otto.jpg"
              alt="Otto Loberg"
              width={280}
              height={280}
              className="rounded-xl object-cover w-full"
            />
          </div>

          <div>

            <h2 className="text-3xl font-semibold">
              Otto Loberg
            </h2>

            <div className="mt-4 space-y-2 text-gray-600">

              <p>Senior Lecturer in Psychology</p>

              <p>
                <a
                  href="mailto:oloberg@bournemouth.ac.uk"
                  className="hover:underline"
                >
                  oloberg@bournemouth.ac.uk
                </a>
              </p>

              <p>
                Poole House P104b, Talbot Campus,
                Fern Barrow, Poole, BH12 5BB
              </p>

            </div>

            <p className="mt-8 leading-8 text-gray-700">
              Otto's research focuses on reading development,
              eye movements, and fixation-related brain activity
              during natural reading.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              His work combines behavioural and neurophysiological
              methods to understand the cognitive mechanisms involved
              in reading and language processing.
            </p>

            <div className="mt-8">

              <h3 className="font-semibold mb-3">
                Research Interests
              </h3>

              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Reading development</li>
                <li>Eye movements</li>
                <li>Fixation-related potentials</li>
                <li>Language processing</li>
                <li>Cognitive neuroscience</li>
              </ul>

              <a
                href="https://orcid.org/0000-0001-5012-0818"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 border px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                ORCID Profile →
              </a>

            </div>

          </div>
        </section>

      </div>
    </main>
  );
}