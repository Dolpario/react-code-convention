import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Main = lazy(() => import('pages/main'))

const MainRouter = (props) => {
  return (
    <Suspense>
      <Routes>
        <Route exact path={`/`} element={<Main {...props} />} />
      </Routes>
    </Suspense>
  )
}

export default MainRouter
