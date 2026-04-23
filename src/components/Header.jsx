// src/components/Header.jsx

import SearchBar from "./SearchBar"

export default function Header({ watchlistCount, searchQuery, onSearchChange }) {
  return (
    // shrink-0 — stops the header compressing inside the flex column
    <header className="flex items-center gap-6 px-7 h-16 bg-zinc-900 border-b border-zinc-800 shrink-0">

      {/* Logo */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
          {/* Simple film-strip shape using borders */}
          <div className="w-3.5 h-3 border-2 border-violet-400 rounded-sm" />
        </div>
        <div>
          <p className="text-sm font-semibold text-zinc-100 leading-tight">CineList</p>
          <p className="text-[10px] text-zinc-500 font-mono">movie tracker</p>
        </div>
      </div>

      {/* Search — flex-1 pushes it to fill and centre */}
      <div className="flex-1 flex justify-center">
        <SearchBar searchQuery={searchQuery} onSearchChange={onSearchChange} />
      </div>

      {/* Watchlist count pill */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-sm text-zinc-400">Watchlist</span>
        <span className="bg-violet-500/20 text-violet-400 border border-violet-500/40 rounded-full px-3 py-0.5 text-xs font-mono font-semibold">
          {watchlistCount}
        </span>
      </div>

      {/* Stage 4: <ThemeToggle /> goes here */}

    </header>
  )
}
