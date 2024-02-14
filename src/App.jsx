import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import CharactersListPage from './pages/CharactersListPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
      </Routes>
    </>
  )
}

export default App
