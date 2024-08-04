import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
<<<<<<< HEAD
    <div className='bg-gray-600 text-white 
     text-3xl p-4'>
      User: {userid}
    </div>
=======
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
>>>>>>> 2dfed97aadd0a7ac6fa38cff3e7ba49eec980586
  )
}

export default User