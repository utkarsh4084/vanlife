import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import VanDetails from './pages/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanPhotos from './pages/Host/HostVanPhotos';

import './index.css';
import './server';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vans" element={<Vans />} />
              <Route path="/vans/:id" element={<VanDetails />} />
              <Route  path="/host" element={<HostLayout />} >
                  <Route index         element={<Dashboard />} /> 
                  <Route path="income"  element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="vans" element={<HostVans />} /> 
                  <Route path="vans/:id" element={<HostVanDetail />} >
                      <Route index element={<HostVanInfo />} />
                      <Route path="pricing" element={<HostVanPricing />} />
                      <Route path="photos" element={<HostVanPhotos />} />
                  </Route>
              </Route> 
            </Route>                           
        </Routes>
    </BrowserRouter>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
