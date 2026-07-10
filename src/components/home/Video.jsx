import React from 'react'
import { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay blocked:', err)
      })
    }
  }, [])
  return (
    <div className='h-full w-full'>
      <video className='opacity-90 h-full w-full object-cover ' playsInline autoPlay loop muted src='/introVideo.mp4'></video>
    </div>
  )
}

export default Video
