import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import LogIn from './LogIn'
import Home_Admin from './Home_Admin'
import Home_User from './Home_User'
function App() {

  return (
    <div className='Body'>
      <BrowserRouter>
        <Routes>
          <Route path='/LogIn' element={<LogIn />}></Route>
          <Route path='/' element={<Register />}></Route>
          <Route path='/Home_User' element={<Home_User />}></Route>
          <Route path='/Home_Admin' element={<Home_Admin username={"Zaid"} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
