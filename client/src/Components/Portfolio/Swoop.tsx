import React from 'react'

function Swoop() {
  return (
    <div className='h-fit w-full flex-col'>
      <div className='h-fit w-full flex-col bg-white my-2 rounded p-1'>
        <h1 className='bg-white rounded font-bold text-xl'>Swoop</h1>
        <h2 className='italic text-gray-500'>An App for Thrifting</h2>
      </div>
      <div className='h-fit w-full flex-col bg-white my-2 rounded p-1'>
        <p className='' > Swoop is an app made for connecting users with used items to customers who want to purchase them. The role of my team was to refactor aall existing code from JavaScript into TypeScript and add automated testing using jest.</p>
        <img src="https://user-images.githubusercontent.com/89812036/213278664-2f9cd4cb-5313-4be3-b3dc-908a65afe26a.png" alt="" />
      </div>
    </div>
  )
}

export default Swoop