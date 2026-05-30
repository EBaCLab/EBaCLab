export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <nav className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between">
          <h1 className="font-semibold">EBaC Lab</h1>

          <div className="flex gap-6 text-sm">
            <a href="#">Research</a>
            <a href="#">People</a>
            <a href="#">Publications</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">
                 Eyes, Brain, and Cognition (EBaC) Lab

        </h1>

        <p className="text-xl text-gray-600 max-w-3xl">
          Investigating reading, language, eye movements, visual cognition,
          and cognitive neuroscience.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">
            Principal Investigators
          </h2>

          <ul className="space-y-2">
            <li>Federica Degno</li>
            <li>Julie Kirkby</li>
            <li>Otto Loberg</li>
          </ul>
        </div>
      </section>
    </main>
  );
}<div className="flex gap-6 text-sm">
  <a href="#">Research</a>
  <a href="#">People</a>
  <a href="#">Publications</a>
  <a href="#">Contact</a>
</div>
