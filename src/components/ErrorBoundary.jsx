import React from 'react'
import { useRouteError } from 'react-router'
const ErrorBoundary = () => {
    let error = useRouteError();
  return (
    <div className='h-screen flex  justify-center items-center text-2xl'>
      
      {error.data}
      {error.status}
    </div>
  )
}

export default ErrorBoundary
