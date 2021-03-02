import loadable from '@loadable/component'

// reserve content
const Loading = () => (
  <main>
    <h2>Loading...</h2>
  </main>
)

// lazy component
const LoadableComponent = loadable(() => import('./NestingAdvanced.js'), {
  fallback: <Loading />
})

export const LoadableDashboard = () => <LoadableComponent />
