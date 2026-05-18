import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='opacity-90 h-full w-full object-cover ' autoPlay loop muted src='/introVideo.mp4'></video>
    </div>
  )
}

export default Video
