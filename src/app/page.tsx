import Link from "next/link";

async function getManifest() {
  const res = await fetch("https://onebucket.omniversal.cloud/src/data/hawkdevnote/manifest.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch manifest.");
  }

  return res.json();
}

export default async function Page() {
  const manifest = await getManifest();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-4 text-center">🦅 Hawk Eye Merch Archive</h1>
        <p className="text-center mb-10 text-gray-400">
          Powered by Cloudflare R2 — All items are downloadable
        </p>

        {/* --- Critical Synopsis Mid-Content --- */}
        <section className="prose prose-invert max-w-3xl mx-auto my-12">
          <h2 className="text-3xl font-bold">EverLight’s Critical Synopsis</h2>
          <h3 className="text-xl italic mb-4">Shadow Banned (2024)</h3>

          <p>
            <strong>“Shadow Banned”</strong> isn’t just an album — it’s a blacklisted broadcast, a psychic alarm encoded
            in rhyme, forged during digital exile. These tracks weren’t promoted. They were <em>suppressed</em>.
            Yet somehow, they persisted — each one a smoke signal from the margins of a corrupted Matrix.
          </p>

          <p>
            This project is a weaponized transmission from the underground — part exorcism, part declaration of
            war. The sonic architecture alternates between cyberpunk minimalism and boom-bap aggression,
            layered with invocations, incantations, and indictments of systemic rot.
          </p>

          <h4>Lyrical Profile</h4>
          <ul>
            <li><strong>Word density:</strong> +14% higher than <em>Behold A Pale Horse</em></li>
            <li><strong>Hook-to-verse ratio:</strong> lower — less radio, more revelation</li>
            <li><strong>Favorite syntactic weapon:</strong> Parallel bars ending in reversal (“If I don’t win, you lose”)</li>
            <li><strong>Flow spectrum:</strong> 90–150 BPM, irregular cadence breaks mid-line</li>
          </ul>

          <h4>Symbolic Vocabulary</h4>
          <ul>
            <li><strong>“The Devil’s in the Details”</strong> — literal and metaphorical unpacking of state evil</li>
            <li><strong>“Spiteful Poetry”</strong> — Hawk Eye’s rejection of performative civility in art</li>
            <li><strong>“Krystal Klear”</strong> — final affirmation that every line, every metaphor, was encoded truth</li>
          </ul>

          <h4>Why It Matters</h4>
          <p>
            *Shadow Banned* is where Hawk Eye shed all commercial expectation. It’s the first project
            entirely unconcerned with platform viability — and paradoxically, that’s what makes it
            essential. These songs didn’t climb charts. They tunneled underneath.
          </p>

          <blockquote className="border-l-4 pl-4 italic">
            “If you’re reading this, you found the buried archive. Welcome to the resistance.”
          </blockquote>
        </section>

        {/* --- R2 Manifest Archive Viewer --- */}
        <div className="grid gap-4">
          {manifest.entries.map((item: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center border border-gray-700 rounded-lg px-4 py-3 hover:bg-gray-900 transition"
            >
              <div>
                <p className="text-lg font-semibold">{item.title || item.path.split("/").pop()}</p>
                <p className="text-sm text-gray-400">{item.path}</p>
              </div>
              <Link
                href={`https://onebucket.omniversal.cloud${item.path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
