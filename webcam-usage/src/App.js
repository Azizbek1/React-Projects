import { useRef, useEffect } from 'react'
import './App.scss'

function App() {
  const videoRef = useRef(null)
  const photoRef = useRef(null)
  const stripRef = useRef(null)
  const colorRef = useRef(null)

  useEffect(() => {
    getVideo()
  }, [videoRef])

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        const video = videoRef.current
        video.srcObject = stream
        video.play()
      })
      .catch((err) => {
        console.error('error: ', err)
      })
  }

  const paintToCanvas = () => {
    const video = videoRef.current
    const photo = photoRef.current
    const ctx = photo.getContext('2d')

    const width = 320
    const height = 240
    photo.setAttribute('width', width)
    photo.setAttribute('height', height)

    return setInterval(() => {
      const color = colorRef.current

      ctx.drawImage(video, 0, 0, width, height)
      const pixels = ctx.getImageData(0, 0, width, height)

      color.style.backgroundColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]})`
      color.style.borderColor = `rgb(${pixels.data[0]},${pixels.data[1]},${pixels.data[2]})`
    }, 200)
  }

  const takePhoto = () => {
    const photo = photoRef.current
    const strip = stripRef.current

    const data = photo.toDataURL('image/jpeg')

    const link = document.createElement('a')
    link.href = data
    link.setAttribute('download', 'myWebCam')
    link.innerHTML = `<img src='${data}' alt='thumbnail' />`
    strip.insertBefore(link, strip.firstChild)
  }

  return (
    <div className='container'>
      <div ref={colorRef} className='scene'>
        <img
          className='mountains'
          src='https://i.ibb.co/RjYk1Ps/2817290-eps-1.png'
          alt='mountains'
        />
      </div>
      <div className='webcam-video'>
        <button onClick={() => takePhoto()}>Take a photo</button>
        <video
          onCanPlay={() => paintToCanvas()}
          ref={videoRef}
          className='player'
        />
        <canvas ref={photoRef} className='photo' />
        <div className='photo-booth'>
          <div ref={stripRef} className='strip' />
        </div>
      </div>
    </div>
  )
}

export default App
