export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center text-white space-y-6 max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome
          </h1>
          <p className="text-2xl text-slate-300">
            My Portfolio
          </p>
        </div>
        
        <p className="text-lg text-slate-400 leading-relaxed">
          This is a modern portfolio built with Next.js, TypeScript, and Tailwind CSS.
          Customize this template to showcase your projects and skills.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
            View Projects
          </button>
          <button className="px-6 py-3 border border-slate-400 hover:border-slate-300 rounded-lg font-semibold transition">
            Contact Me
          </button>
        </div>

        <div className="pt-8 text-sm text-slate-500">
          <p>
            Fork of{" "}
            <a 
              href="https://github.com/jaikishore2026-max/jaikishore2026-max.github.io" 
              className="text-blue-400 hover:underline"
            >
              jaikishore2026-max/jaikishore2026-max.github.io
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
