import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCompany, actionLetter, actionLoading } from '../../Redux/Actions'
import { WholeState, CoverLetter } from '../../Redux/StateTypes'
import { NewLetter } from '../../Services/AIService'
import CvrDrop from './CvrDrop'

function CoverLtr() {

  const dispatch = useDispatch()

  const state = useSelector((state: WholeState)=> state.Cover)

  const makeLetter = async (promptVars: {Company: string, Quality1: string, Quality2: string, Focus: string}) => {
    dispatch(actionLoading)
    try {
      const letter = await NewLetter(promptVars)
      dispatch(actionLetter(letter))
      dispatch(actionLoading)
      console.log('NEW LETTER', letter)
    } catch (error) {
      console.log(error)
      dispatch(actionLetter(JSON.stringify(error)))
      dispatch(actionLoading)
    }  
  }

  return (
    <div className='flex h-fit w-full flex-col'>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded p-1'>
      <h1 className='bg-white rounded font-bold text-xl'>Cover Letter</h1>
    </div>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded px-1 pb-10'>
      {
      state.loading ?
      <p>LOADING</p> :
      <p className='whitespace-pre-line' >{state.text}</p>
      }
    </div>
    <div className='flex h-fit w-full flex-col bg-white my-2 rounded px-1'>
      <h1>Not to your liking? Generate a new one that fits your needs!</h1>
      <div className='flex justify-around my-1'>
      <CvrDrop category = {'Focus' as keyof CoverLetter}/>
      <CvrDrop category = {'Quality1' as keyof CoverLetter}/>
      <CvrDrop category = {'Quality2' as keyof CoverLetter}/>
      </div>
      <input type="text" title='CompnayText'  className='border rounded p-2 my-1' placeholder='Company Name...' onChange={(e) => {dispatch(actionCompany(e.target.value))}}/>
      <button type='button' title='Generate' onClick={() => makeLetter({Company: state.Company, Quality1: state.Quality1Select, Quality2: state.Quality2Select, Focus: state.FocusSelect})} 
        className='w-full bg-transparent disabled:text-gray-300 disabled:hover:bg-white disabled:border-gray-300 hover:bg-[#4c4c74] text-blue-700 font-semibold hover:text-white py-2 px-4 my-1 border border-blue-500 hover:border-transparent rounded'
        disabled = {!(state.Company.length > 0 && state.Quality1Select.length > 0 && state.Quality2Select.length > 0 && state.FocusSelect.length > 0)}>
          Generate
      </button>
    </div>
  </div>
  )
}

export default CoverLtr