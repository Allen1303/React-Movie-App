// src/components/WatchlistPanel.jsx

import WatchlistItem from "./WatchlistItem"

export default function WatchlistPanel({ items }) {
  const watchedCount = items.filter(i => i.watched).length
  const unwatchedCount = items.length - watchedCount

  return (
    // w-[268px] shrink-0 — fixed width sidebar that never compresses
    // max-h + overflow-y-auto — scrolls when items exceed viewport height
    <aside className="w-[268px] shrink-0 bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col max-h-[calc(100vh-100px)]">

      {/* Panel header */}
      <div className="mb-3">
        <h2 className="text-sm font-semibold text-zinc-100 mb-3">My Watchlist</h2>

        {/* Stats row */}
        <div className="flex gap-4">
          {[
            { label: "saved", value: items.length },
            { label: "watched", value: watchedCount },
            { label: "to watch", value: unwatchedCount },
          ].map(s => (
            <div key={s.label}>
              <p className="text-base font-bold text-zinc-100 font-mono leading-none">{s.value}</p>
              <p className="text-[10px] text-zinc-500 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-zinc-800 mb-3" />
      {/* Filter tabs — Stage 2 */}

      {/* Scrollable list */}
      <ul className="overflow-y-auto flex-1 p-0">
        {items.length === 0 ? (
          <li className="list-none text-center py-8 text-zinc-500 text-sm leading-relaxed">
            No movies yet.<br />Search and add some.
          </li>
        ) : (
          items.map(item => (
            <WatchlistItem key={item.imdbID} item={item} />
          ))
        )}
      </ul>
    </aside>
  )
}
