import React from 'react'

function SudoLit() {
  return (
    <div className='flex h-fit w-full flex-col'>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <h1 className='bg-white rounded font-bold text-xl'>SudoLit</h1>
      <h2 className='italic text-gray-500'>StoryBoards and Flowcharts</h2>
    </div>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <p className='' > Sudolit is an app for creating, saving and editing visual flowcharts with text and images. I built this app from the ground up using React and TypeScript for the frontend, and Express and MongoDB for the backend. I used cloudinary for image storage and ReactFlow for the flowcharts.</p>
      <img src="https://user-images.githubusercontent.com/114926465/218268179-6799f273-f1b1-4d09-99e9-271b4a1dd41f.jpg" alt="" />
    </div>
  </div>
  )
}

export default SudoLit