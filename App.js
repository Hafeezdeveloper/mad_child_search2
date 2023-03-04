import logo from './logo.svg';
import './App.css';
import Gets from './comp/BaseHandle';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Searchbar from './parc/Searchbar';


function App() {

  return (
    <>
<Searchbar
    getValue={(selVal , inpVal) =>{
      console.log(selVal, inpVal)
    }}
onSearch={[
  {
    displayName:'full name',
    key:'name'
  },
  {
    displayName:'email',
    key:'email'
  }
]} />
    </>
  );  
}

export default App;
