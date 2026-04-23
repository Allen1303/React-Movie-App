// src/components/SearchBar.jsx
export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <search className="w-80">

      {/* sr-only hides the label visually but keeps it for screen readers */}
      <label htmlFor="movie-search" className="sr-only">
        Search for a movie
      </label>

      {/* relative wrapper so the icon can sit inside the input */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm pointer-events-none">
          ⌕
        </span>
        <input
          id="movie-search"
          type="search"
          placeholder="Search movies..."
          value={searchQuery} onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-2 pl-8 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-600 transition-colors"
        // Stage 2: value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
        />
      </div>

    </search>
  )
}
