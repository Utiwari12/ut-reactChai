import React from 'react'
import { useState, useCallback,useEffect, useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [Password, setPassword] = useState('');

  //useref hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let Password = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (characterAllowed) str += '!@#$%^&*-_+={}[]|:;"<>?,./()';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      Password += str.charAt(char);

    }

    setPassword(Password);

  }, [
    length,
    numberAllowed,
    characterAllowed,
    setPassword
  ])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])
   
  return (
    <>
      <h1 className="text-3xl font-bold underline 
     text-center text-white">
        Password Generator
      </h1>
      <div className='w-full max-w-md mx-auto shadow-md
         p-4 rounded-lg my-8 text-orange-500 bg-gray-800'>
        <h4 className="text-1xl font-bold underline text-center text-white flex justify-center">
          Password Generator
        </h4>
        <div className='flex drop-shadow rounded-lg 
            mb-4 overflow-hidden'>
          <input type='text' value={Password} className='w-full py-1 px-3 outline-none'
            placeholder='Generate Password'
            readOnly
            ref={passwordRef} />

          <button
            onClick={() => {
              navigator.clipboard.writeText(Password);
              passwordRef.current?.select();
              passwordRef.current?.setSelectionRange(0, 29);
            }}
            className='py-1 px-3 shrink-0 bg-orange-500 text-white'>
              copy
              </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={1000}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => !prev);

              }}

            />
            <label htmlFor='numberInput'>Number</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id='characterInput'
              onChange={() => {
                setCharacterAllowed((prev) => !prev);

              }}
            />
            <label htmlFor='characterInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App