import React, { Component, useEffect } from 'react';
import './App.css';
import Container from './Components/Container/Container';
import CoverLtr from './Components/CoverLtr/CoverLtr';
import Footer from './Components/Footer/Footer';
import GPTA from './Components/Portfolio/GPTA';
import Header from './Components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { actionSize } from './Redux/Actions';
import SudoLit from './Components/Portfolio/SudoLit';
import Swoop from './Components/Portfolio/Swoop';
import { ReactComponent, WholeState } from './Redux/StateTypes';
import { stat } from 'fs';

function App() {

  const dispatch = useDispatch()

  const state = useSelector((state: WholeState) => state.Main)

  //cont https://blog.bitsrc.io/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth > 1710) {

        dispatch(actionSize(4))

      } else if (window.innerWidth > 1254) {

        dispatch(actionSize(3))

      } else if (window.innerWidth > 820) {

        dispatch(actionSize(2))

      } else {

        dispatch(actionSize(1))

      }
      console.log(state)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const adjustDivs = (size: number) => {
    const widthSize = Math.ceil(state.components.length/size)
    console.log(widthSize)
    const compArray = [...state.components]
    const fullComponent = []
    
    for (let i = 0; i < size; i++) {
      let oneDiv = []
      for (let i = 0; i < widthSize; i++) {
        if (compArray.length) {
          oneDiv.push(<Container Component={compArray.shift() as ReactComponent} />)
          console.log('compArr', compArray)
          console.log(oneDiv)
        }
      }
      fullComponent.push(<div className='w-[360px] h-fit flex-col flex-wrap justify-center'>{oneDiv.map((el) => el)}</div>)
    }
    console.log('fullComponent', fullComponent)
    return fullComponent
  }

  return (
    <div className="flex-col items-center w-screen h-screen bg-gray-300" data-testid="App">
      <Header />
      <div className='w-full h-fit flex-row flex-wrap justify-around'>
        {adjustDivs(state.size).map((el) => {
          return el
        })}
        {/* <div className='w-11/12 h-fit flex-col flex-wrap items-center'>
          <Container Component={GPTA}/>
          <Container Component={CoverLtr}/>
          <Container Component={SudoLit}/>
          <Container Component={Swoop}/>
          <Container Component={GPTA}/>
        </div> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
