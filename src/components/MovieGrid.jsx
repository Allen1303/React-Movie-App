// src/components/MovieGrid.jsx

import MovieCard from "./MovieCard"

export default function MovieGrid({ movies, title }) {
  return (
    // min-w-0 — critical when a flex child contains a grid.
    // Without it the grid ignores the parent width and overflows.
    <section className="flex-1 min-w-0">

      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-zinc-100">{title}</h2>
        <span className="text-xs text-zinc-500 font-mono">{movies.length} titles</span>
      </div>

      {/* Empty state */}
      {movies.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-zinc-500 text-sm">
          No movies found
        </div>
      ) : (
        // auto-fill grid — creates as many columns as fit at min 195px each
        <div className="grid grid-cols-[repeat(auto-fill,minmax(195px,1fr))] gap-3.5">
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

    </section>
  )
}
