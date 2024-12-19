import React from 'react'
import { DataProvider } from './context/DataContext';
import Home from './pages/Home'


import './App.css'


function App() {
  

  return (
    <DataProvider>
      <Home />
    </DataProvider>
  )
}

export default App
