import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//라우터목록
const Main = lazy(() => import('routers/main'))

const Router = (props) => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={'/main/*'} element={<Main />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
