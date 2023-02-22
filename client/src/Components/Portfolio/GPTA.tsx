import React from 'react'

function GPTA() {
  return (
    <div className='h-fit w-full flex-col'>
    <div className='h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <h1 className='bg-white rounded font-bold text-xl'>GP-TA</h1>
      <h2 className='italic text-gray-500'>An AI Teachers Assistant</h2>
    </div>
    <div className='h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <p className='' >GP-TA is an app ment to take some of the burden off teachers using OpenAI. It accepts lanuage papers from students in image, text or docx format and gives clear and specific feedback for the assignment using the OpenAI API. I worked with a team using the agile methodology and helped build this appp from the ground up using React and TypeScript for the forntend and Koa and PostgreSQL for the backend. We also used Stripe for payments and Auth0 for authentication.</p>
      <img src="https://github.com/Kennyk22/GP-TA/raw/development/Images/Feedback.png" alt="" />
    </div>
  </div>
  )
}

export default GPTA