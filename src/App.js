import './App.css';
import { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './pages/Authentication/data/firebase.init';
import Router from './components/Router/Router';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Register from './pages/Authentication/Register';





const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  })
  return(
    <main>
      <Router></Router>
      {/* {user?(
          <>
            <Router></Router>
          </>
        ):(
          <>
            <Routes>
              <Route path='/' element={<Login></Login>}></Route>
              <Route path='/login' element={<Login></Login>}></Route>
              <Route path='/register' element={<Register></Register>}></Route>
              <Route path='*' element={<Login></Login>}></Route>
            </Routes>
          </>
        )
      } */}
    </main>
  );

}

export default App;