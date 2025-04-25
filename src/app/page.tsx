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
