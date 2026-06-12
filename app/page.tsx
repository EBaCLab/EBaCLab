import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="border-b">
        <div className="max-w-6xl mx-auto px-8 py-28">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/EBaC.jpg"
              alt="EBaC Lab Logo"
              width={320}
              height={320}
              priority
              className="mb-12 h-auto"
            />

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-4xl">
              Eyes, Brain and
              <br />
              Cognition Lab
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-3xl">
              We investigate reading, language processing, eye movements,
              visual cognition, and cognitive neuroscience using behavioural
              methods, eye tracking, EEG, and fixation-related potentials.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              <span className="border rounded-full px-4 py-2 text-sm">
                Reading
              </span>
              <span className="border rounded-full px-4 py-2 text-sm">
                Eye Movements
              </span>
              <span className="border rounded-full px-4 py-2 text-sm">
                Visual Cognition
              </span>
              <span className="border rounded-full px-4 py-2 text-sm">
                EEG & FRPs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Photos */}
      <section className="border-b bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <h2 className="text-3xl font-semibold mb-8">Lab Photos</h2>

          <div className="border rounded-2xl bg-white p-10 text-center">
            <p className="text-gray-600">
              Lab group photos will be added here.
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-semibold mb-16">Research Themes</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl mb-4">Eye Movements & Reading</h3>
              <p className="text-gray-600 leading-8">
                Understanding how readers process language through eye movements
                and fixation behaviour during natural reading.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl mb-4">Visual Cognition</h3>
              <p className="text-gray-600 leading-8">
                Investigating visual attention, perception, memory, and
                cognitive mechanisms underlying human performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl mb-4">Cognitive Neuroscience</h3>
              <p className="text-gray-600 leading-8">
                Combining behavioural methods and neural measures to understand
                cognition and language processing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border">
              <h3 className="text-2xl mb-4">
                EEG & Fixation-Related Potentials
              </h3>
              <p className="text-gray-600 leading-8">
                Integrating eye tracking and EEG techniques to investigate
                neural activity during natural reading and visual processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal Investigators */}
      <section className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-semibold mb-16">
          Principal Investigators
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="group">
            <Image
              src="/federica.jpg"
              alt="Federica Degno"
              width={500}
              height={500}
              className="rounded-xl object-cover aspect-square mb-5 transition duration-300 group-hover:scale-[1.02]"
            />
            <h3 className="text-2xl font-medium">Federica Degno</h3>
            <p className="text-gray-500 mt-2">Principal Investigator</p>
            <a
              href="/people"
              className="inline-block mt-4 border px-4 py-2 rounded-md hover:bg-gray-100"
            >
              View Profile →
            </a>
          </div>

          <div className="group">
            <Image
              src="/julie.jpg"
              alt="Julie Kirkby"
              width={500}
              height={500}
              className="rounded-xl object-cover aspect-square mb-5 transition duration-300 group-hover:scale-[1.02]"
            />
            <h3 className="text-2xl font-medium">Julie Kirkby</h3>
            <p className="text-gray-500 mt-2">Principal Investigator</p>
            <a
              href="/people"
              className="inline-block mt-4 border px-4 py-2 rounded-md hover:bg-gray-100"
            >
              View Profile →
            </a>
          </div>

          <div className="group">
            <Image
              src="/otto.jpg"
              alt="Otto Loberg"
              width={500}
              height={500}
              className="rounded-xl object-cover aspect-square mb-5 transition duration-300 group-hover:scale-[1.02]"
            />
            <h3 className="text-2xl font-medium">Otto Loberg</h3>
            <p className="text-gray-500 mt-2">Principal Investigator</p>
            <a
              href="/people"
              className="inline-block mt-4 border px-4 py-2 rounded-md hover:bg-gray-100"
            >
              View Profile →
            </a>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="border-t">
        <div className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-semibold mb-12">
            Selected Publications
          </h2>

          <div className="space-y-6">
            <div className="border rounded-xl p-6">
              Degno, F., Loberg, O., Zang, C., Zhang, M., Donnelly, N.,
              Liversedge, S. P. (2019). Parafoveal previews and lexical
              frequency in natural reading.
            </div>

            <div className="border rounded-xl p-6">
              Degno, F., Loberg, O., Zang, C., Zhang, M., Donnelly, N.,
              Liversedge, S. P. (2019). A co-registration investigation of
              inter-word spacing and parafoveal preview.
            </div>

            <div className="border rounded-xl p-6">
              Loberg, O., Hautala, J., Hämäläinen, J. A., Leppänen, P. H. T.
              (2019). Influence of reading skill and word length on
              fixation-related brain activity.
            </div>
          </div>

          <a
            href="/publications"
            className="inline-block mt-10 border px-5 py-3 rounded-md hover:bg-gray-100"
          >
            View All Publications →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-8 py-12">
          <h3 className="text-xl font-semibold">
            Eyes, Brain and Cognition (EBaC) Lab
          </h3>

          <p className="text-gray-600 mt-4">
            Reading • Eye Movements • Visual Cognition • EEG
          </p>
        </div>
      </footer>
    </main>
  );
}