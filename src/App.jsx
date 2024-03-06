import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Home from './Pages/home';
import Invite from './Pages/invite';
import InviteClick from './Pages/InviteClick';
import Notifications from './Pages/Notifications';

export const Bottom = () =>{
  const navigate = useNavigate()
  return(
    <div className='d-flex justify-content-center mt-2 '>
      <button className='button' onClick={() => {navigate('/invitation')}}>Invite</button>
    </div>
  )
}

const App = () => {
  return (
    <>
        <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/invite" element={<Invite />} />
      <Route path="/invitation" element={<InviteClick />} />
      <Route path="/notification" element={<Notifications />} />
      </Routes>
    </Router>
    {/* <Bottom/> */}
    </>
  );
};

export default App;
