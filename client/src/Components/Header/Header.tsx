import React from 'react'




function Header() {

  

  return (
    <header className='flex justify-center w-full h-1/2 py-[5%]'>
      <div className="flex p-[2%] h-full w-1/2 rounded-xl bg-[#4c4c74] items-center shadow-xl">
        <div className='flex h-fit w-fit p-[1%] rounded-[50%] mr-[5%] justify-center items-center bg-[#ffffff]'>
          <img className="rounded-[50%]" src="https://media.licdn.com/dms/image/D4D03AQFHXKD1FGARfQ/profile-displayphoto-shrink_800_800/0/1676134382179?e=1681948800&v=beta&t=gCHOk1OeyR056HOb55raCFeaTvJHR0QjsJ1AmRCV3D4" alt="" />
        </div>
        <div className='flex justify-center items-center bg-white rounded-md p-[1.5%]'>
          <p className=''>
            Hello! My name is Kenny Karter, I am a full stack developer with knowledge and experience in JavaScript, TypeScript and Python.
            Some of my favorite technolgies to work with are AI, Databases and single page frameworks like React and Next.js
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header