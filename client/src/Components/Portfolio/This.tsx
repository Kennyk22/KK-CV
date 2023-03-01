import React from 'react'

function This() {
  return (
    <div className='flex h-fit w-full flex-col'>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <h1 className='bg-white rounded font-bold text-xl'>This Site</h1>
      <h2 className='italic text-gray-500'>All About Me!</h2>
    </div>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <p className='' >This site was built using React and TypeScript, and I built it all by myself. It contains information about me and work I have done. It was deployed using AWS.</p>
      <img src="https://user-images.githubusercontent.com/114926465/220724399-af2640fe-21bd-4ffc-9d72-db63e8dc876a.png" alt="" />
    </div>
  </div>
  )
}

export default This