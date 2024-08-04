import React from 'react'
import UserContextProvider from './context/UserContextProvider'

function APP() {
  return (
    <UserContextProvider>
      <h1>Hello World</h1>
    </UserContextProvider>
  )
}

export default APP