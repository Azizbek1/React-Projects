import { useState, useCallback, useContext } from 'react'

import './App.css'

import Uploady, {
  useItemProgressListener,
  UploadyContext
} from '@rpldy/uploady'
import { getMockSenderEnhancer } from '@rpldy/mock-sender'
import { Button, Progress } from 'antd'

const UploadProgress = () => {
  const [progress, setProgess] = useState(0)
  const progressData = useItemProgressListener()

  if (progressData && progressData.completed > progress) {
    setProgess(() => progressData.completed)
  }

  return progressData && <Progress type='circle' percent={progress} />
}

const CustomButton = () => {
  const uploady = useContext(UploadyContext)

  const hanldeUpload = useCallback(() => {
    uploady.showFileUpload()
  }, [uploady])

  return (
    <Button onClick={hanldeUpload} type='primary'>
      Custom Upload Button
    </Button>
  )
}

const Uploader = () => {
  return (
    <Uploady destination={{ url: 'mock-url' }} enhancer={mockEnhancer}>
      <div className='Uploader'>
        <CustomButton />
        <br />
        <br />
        <UploadProgress />
      </div>
    </Uploady>
  )
}

const mockEnhancer = getMockSenderEnhancer({
  delay: 1500,
  progressIntervals: [20, 40, 75, 80, 90, 99]
})

export default Uploader
