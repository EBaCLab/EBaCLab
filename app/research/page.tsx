export default function ResearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Research</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Eye Movements and Reading
          </h2>

          <p className="text-gray-700">
            Investigating how eye movements reveal cognitive processes
            during reading and language comprehension.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Visual Cognition
          </h2>

          <p className="text-gray-700">
            Understanding visual attention, perception, and visual
            information processing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            Cognitive Neuroscience
          </h2>

          <p className="text-gray-700">
            Combining behavioural measures, eye tracking and EEG
            to investigate cognition.
          </p>
        </section>
      </div>
    </main>
  );
}