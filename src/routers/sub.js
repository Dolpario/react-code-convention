import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Sub = lazy(() => import('pages/sub'))

const MainRouter = (props) => {
  return (
    <Suspense>
      <Routes>
        <Route exact path={`/`} component={() => <Sub {...props} />} />
      </Routes>
    </Suspense>
  )
}

export default MainRouter
