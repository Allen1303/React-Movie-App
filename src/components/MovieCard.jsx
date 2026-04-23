
// Writing the full strings here guarantees they survive the build.
const POSTER_COLORS = [
  "bg-violet-900",
  "bg-blue-900",
  "bg-emerald-900",
  "bg-red-900",
  "bg-amber-900",
  "bg-indigo-900",
  "bg-teal-900",
  "bg-purple-900",
]

function getPosterColor(title) {
  return POSTER_COLORS[title.charCodeAt(0) % POSTER_COLORS.length]
}

function truncate(str, n) {
  return str.length > n ? str.slice(0, n) + "…" : str
}

export default function MovieCard({ movie }) {
  {/*Destructure the properties needed to be displayed in the movie card*/ }
  const { Title, Year, Genre, imdbRating, Plot, Runtime } = movie
  const primaryGenre = Genre.split(",")[0].trim()

  return (
    // overflow-hidden + rounded-xl must be paired — overflow-hidden clips
    // the poster background so it respects the card's rounded corners
    <article className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl overflow-hidden flex flex-col">

      {/* Poster area relative — lets the rating/runtime chips use absolute positioning
          shrink-0 — prevents flex from compressing the poster height     */}
      <div className={`${getPosterColor(Title)} h-[170px] relative flex items-center justify-center shrink-0`}>

        {/* Placeholder letter — decorative, barely visible */}
        <span className="text-[64px] font-black text-white/10 font-mono select-none leading-none">
          {Title.charAt(0)}
        </span>

        {/* IMDb rating chip — absolute top-right
            bg-black/70 = black at 70% opacity overlay                    */}
        <div className="absolute top-2 right-2 bg-black/70 rounded px-2 py-0.5 flex items-center gap-1">
          <span className="text-yellow-400 text-[11px]">★</span>
          <span className="text-zinc-200 text-[11px] font-mono">{imdbRating}</span>
        </div>

        {/* Runtime chip — absolute top-left */}
        <div className="absolute top-2 left-2 bg-black/70 rounded px-2 py-0.5">
          <span className="text-zinc-400 text-[10px] font-mono">{Runtime}</span>
        </div>
      </div>

      {/* Card body
          flex-1 — fills remaining height after the fixed poster so all
          cards in the same row align their bottom edges                  */}
      <div className="flex flex-col gap-2 p-3.5 flex-1">

        {/* Title + year */}
        <div>
          <h3 className="text-sm font-semibold text-zinc-100 leading-snug">{Title}</h3>
          <span className="text-xs text-zinc-500 font-mono">{Year}</span>
        </div>

        {/* Genre badge
            self-start — keeps the badge tight around its text instead
            of stretching full width inside the flex column              */}
        <span className="self-start text-[10px] font-mono text-violet-400 bg-violet-500/15 border border-violet-500/30 rounded px-2 py-0.5">
          {primaryGenre}
        </span>

        {/* Plot — truncated to 3 lines */}
        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 flex-1">
          {Plot}
        </p>

        {/* Add button — static for now, wired up in Stage 2 */}
        <button
          type="button"
          className="mt-auto w-full py-1.5 text-xs font-medium rounded-lg bg-zinc-700 hover:bg-violet-600 text-zinc-300 hover:text-white border border-zinc-600 hover:border-violet-500 transition-colors cursor-pointer"
        >
          + Add to Watchlist
        </button>

      </div>
    </article>
  )
}
