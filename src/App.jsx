import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Home from './Component/Home';
import Error from './Component/Error';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Login from './Component/Login';
import Registration from './Component/Registration';




function App() {


  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      </AuthProvider>
    </>
  )
}

export default App
