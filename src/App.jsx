import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import CharactersListPage from './pages/CharactersListPage'
import EquipmentPage from './pages/EquipmentPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
        <Route path='/equipment' element={<EquipmentPage />} />
      </Routes>
    </>
  )
}

export default App
