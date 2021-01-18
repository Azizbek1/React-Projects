import loadable from '@loadable/component'

function Loading() {
  return <div>Loading...</div>
}

const LoadableComponent = loadable(() => import('../Nested.js'), {
  fallback: <Loading />
})

export default function LoadableDashboard() {
  return <LoadableComponent />
}
