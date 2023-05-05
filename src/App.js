import { Landing, Error, Register, ProtectRoute } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Stats, Profile, AddJob, AllJobs, ShareLayout } from './pages/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectRoute>
              <ShareLayout />
            </ProtectRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/add-job' element={<AddJob />} />
          <Route path='/all-jobs' element={<AllJobs />} />
        </Route>
        <Route path='/landing' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
