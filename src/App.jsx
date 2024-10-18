import { useState } from 'react'

import './App.css'

function App() {
const [bgColor,setBgColor]=useState("black")

const setRed =()=>{ 
  setBgColor("red")
  


}
const setGreen =()=>{

  setBgColor("green")
  


}
const setBlue =()=>{
  
  setBgColor("blue")
  


}
const setYellow =()=>{
  
  setBgColor("yellow")
  


}
const setDark =()=>{
  
  setBgColor("grey")
  


}


  return (
    <>
    <div id="div" style={{height:"100vh", backgroundColor:bgColor}} className='d-flex justify-content-center align-items-center'>
    <h1 className='text-light'>Background changing </h1>
      <button className='  mx-3 bg-danger text-light ' onClick={setRed} style={{borderRadius:"30px", padding:"30px", border:"1px solid black"}}>  RED</button>
      <button className='  mx-3 bg-success text-light ' onClick={setGreen} style={{borderRadius:"30px", padding:"30px"}}>GREEN</button>
      <button className='  mx-3 bg-primary text-light ' onClick={setBlue} style={{borderRadius:"30px", padding:"30px"}}>BLUE</button>
      <button className='  mx-3 bg-warning text-light ' onClick={setYellow} style={{borderRadius:"30px", padding:"30px"}}>YELLOW</button>
      <button className='  mx-3 bg-Secondary text-dark ' onClick={setDark} style={{borderRadius:"30px", padding:"30px"}}>Grey</button>
    </div>
    </>
  )
}


export default App
