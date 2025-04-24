import './App.css'
import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router'
import RootLayout from './layouts/RootLayout'
import Landing from './pages/user/Landing';
import Chefs from './pages/user/Chefs';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Allchefs from './pages/dashboard/Allchefs';
import Addchef from './pages/dashboard/Addchef';
import EditForm from './components/EditForm';
import ChefCard from './components/ChefCard'
import BookingForm from './components/BookingForm';
import Profile from './pages/user/Profile';
import ChefProfile from './pages/dashboard/ChefProfile';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
        <Route index='true' element={<Landing/>}/>
        <Route path='chefs' element={<Chefs/>}/>
        <Route path="/chefCard/:chefName" element={<ChefCard />} />
        {/* <Route path="/chefs/:chefId" element={<ChefCard />} /> */}
        <Route path='bookingform' element={<BookingForm/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='chefprofile' element={<ChefProfile/>}/>

          <Route path='/register' element={<Register/>}/>
      <Route path='/login' element= {<Login/>}/>

      <Route path="/dashboard" element={<DashboardLayout />}>
      <Route index='true' element={<Allchefs/>}/>
      <Route path='addchef'element={<Addchef/>}/>
      <Route path='editform' element={<EditForm/>}/>
      </Route> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App
