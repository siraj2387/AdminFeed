import * as React from 'react';
import { useState } from "react";
import SideNav from "../src/components/common/SideNav";
import DataTable from "./components/DataTable/DataTable";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Button from '@mui/material/Button';
import FeedForm from "./components/modals/FeedForm";
import "./App.css";

function App() {
  const [state,setState]=useState(false)

  const onAddForm = (()=>{
    setState(true);
  });
  const onCloseForm = (()=>{
    setState(false);
  })

  return (
    <div className="App">     
      <Header/>
      <h1>Feed Form</h1>
       <SideNav/>
       {!state &&
       
       <DataTable/>}
        {
         state&&
           <FeedForm/>
       }
       <div className="buttonClass">      
       <Button className ="formButton" variant="contained" onClick={onAddForm}>Add New Feed</Button>
       <Button variant="contained" onClick={onCloseForm}>Close</Button>
       </div>     
      <Footer/>     
    </div>
  );
}

export default App;
