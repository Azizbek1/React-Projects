import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams
} from 'react-router-dom'

export default function ModalGallery() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  )
}

function ModalSwitch() {
  const location = useLocation()

  const background = location.state && location.state.background

  return (
    <>
      <Switch location={background || location}>
        <Route exact path='/' children={<Home />} />
        <Route path='/gallery' children={<Gallery />} />
        <Route path='/img/:id' children={<ImageView />} />
      </Switch>

      {background && <Route path='/img/:id' children={<Modal />} />}
    </>
  )
}

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' }
]

function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  )
}

function Image({ color }) {
  return (
    <div
      style={{
        width: '100%',
        height: 400,
        background: color
      }}
    />
  )
}

function Home() {
  return (
    <>
      <Link to='/gallery'>Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to='/img/2'>Tomato</Link>
        </li>
        <li>
          <Link to='/img/4'>Crimson</Link>
        </li>
      </ul>
    </>
  )
}

function Gallery() {
  const location = useLocation()

  return (
    <>
      {IMAGES.map(({ id, color, title }) => (
        <Link
          key={id}
          to={{
            pathname: `img/${id}`,
            state: { background: location }
          }}
        >
          <Thumbnail color={color} />
          <p>{title}</p>
        </Link>
      ))}
    </>
  )
}

function ImageView() {
  const { id } = useParams()
  const { title, color } = IMAGES[id]

  if (!title) return <div>Image not found</div>

  return (
    <div>
      <h1>{title}</h1>
      <Image color={color} />
    </div>
  )
}

function Modal() {
  const history = useHistory()
  const { id } = useParams()
  const { title, color } = IMAGES[id]

  if (!title) return null

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }

  return (
    <div
      onClick={back}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.15)'
      }}
    >
      <div
        className='modal'
        style={{
          position: 'absolute',
          background: '#fff',
          top: 25,
          left: '10%',
          right: '10%',
          padding: 15,
          border: '2px solid #444'
        }}
      >
        <h1>{title}</h1>
        <Image color={color} />
        <button onClick={back}>Close</button>
      </div>
    </div>
  )
}
