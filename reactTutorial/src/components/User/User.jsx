import React from 'react'
import {useParams} from 'react-router-dom'

const User = () => {
    const {userid}= useParams();
  return (
    <div className='text-center bg-slate-600 p-4 text-white text-2xl'>
      User:{userid}
    </div>
  )
}

export default User
