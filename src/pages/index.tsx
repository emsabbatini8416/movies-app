import * as React from 'react'

const MoviesLazy = React.lazy(() => import('./movies'))

const Movies = (
  <React.Suspense fallback={<div>Loading</div>}>
    <MoviesLazy />
  </React.Suspense>
)

export {
  Movies
}