import { useRouter } from 'next/router'
import React from 'react'

const page = () => {
    const router = useRouter()
    console.log(router.query._id)
  return (
    <div>
      <h1>{router.query._id}</h1>
    </div>
  )
}

export default page
