// src/components/WatchlistItem.jsx

const POSTER_COLORS = [
  "bg-violet-900", "bg-blue-900", "bg-emerald-900", "bg-red-900",
  "bg-amber-900", "bg-indigo-900", "bg-teal-900", "bg-purple-900",
]
function getPosterColor(title) {
  return POSTER_COLORS[title.charCodeAt(0) % POSTER_COLORS.length]
}

export default function WatchlistItem({ item }) {
  const { Title, Year, imdbRating, watched } = item

  return (
    <li className="flex gap-3 py-3 border-b border-zinc-800 last:border-b-0 items-start list-none">

      {/* Mini poster */}
      <div className={`${getPosterColor(Title)} w-10 h-14 rounded-md flex items-center justify-center shrink-0`}>
        <span className="text-lg font-black text-white/20 font-mono leading-none">
          {Title.charAt(0)}
        </span>
      </div>

      {/* Info
          min-w-0 on the flex child prevents long titles from
          overflowing — required for truncate to work            */}
      <div className="flex-1 min-w-0">

        {/* Title — strikethrough when watched */}
        <p className={`text-sm font-medium truncate ${watched ? "line-through text-zinc-500" : "text-zinc-100"}`}>
          {Title}
        </p>

        <div className="flex items-center gap-2 mt-1">
          <span className="text-[11px] text-zinc-500 font-mono">{Year}</span>
          <span className="text-zinc-700">·</span>
          <span className="text-[11px] text-yellow-400">★ {imdbRating}</span>
        </div>

        {/* Watched badge — only renders when watched is true */}
        {watched && (
          <span className="inline-block mt-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 rounded px-1.5 py-0.5">
            watched
          </span>
        )}
      </div>

      {/* Remove button — wired up in Stage 2 */}
      <button
        type="button"
        className="text-zinc-600 hover:text-red-400 text-xs mt-0.5 transition-colors cursor-pointer shrink-0"
      >
        ✕
      </button>

    </li>
  )
}
