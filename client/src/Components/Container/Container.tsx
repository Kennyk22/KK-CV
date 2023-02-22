import React from 'react'
import { ReactComponent } from '../../Redux/StateTypes'


function Container({ Component }: {Component: ReactComponent}) {
  


  return (
    <div className='my-[1%] h-fit w-full rounded-xl bg-[#4c4c74] items-center shadow-xl p-3'>
        <Component/>
    </div>
  )
}

export default Container