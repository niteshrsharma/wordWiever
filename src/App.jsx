import Navbar from "./components/nav/Navbar"
import './App.css'
import { useState } from "react";
import Home from "./components/home/Home";
import Gallery from "./components/gallery/Gallery";
import Dashboard from "./components/dashboard/Dashboard";
let login=true;
export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <>
      <Navbar tab={tab} setTab={setTab} login={login}/>

      {
        tab == 'home' && <Home />
      }

      {
        tab=='gallery' && <Gallery/>
      }

      {
        tab=='dashboard' && <Dashboard/>
      }
    </>
  )
}