import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username : "UT",
  //   age : 50
  // }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-4'>Tailwind</h1>
          
    <Card username="Chai aur code" btnText = "Click Me"
    />
    <Card username = "UT" btnText = "View Me"/>
    <Card username={"Delba"}/>
  
    </>
  )
}

export default App
