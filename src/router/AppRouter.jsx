import {Route, Routes } from 'react-router-dom'
import LoginPage from '../auth/pages/LoginPage'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import ProvateRoute from './ProvateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>}/>
            {/* <Route path="login" element={<LoginPage />}/> */}

            <Route path="/*" element={
              <ProvateRoute>
                <HeroesRoutes />
              </ProvateRoute>}/>

            {/* <Route path="/*" element={<HeroesRoutes />}/> */}

        </Routes>
    </>
  )
}

export default AppRouter