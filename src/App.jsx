import './App.css'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import CharactersListPage from './pages/CharactersListPage'
import CharacterDetailsPage from './pages/CharacterDetailsPage'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<CharactersListPage />} />
        <Route path='/details/:id' element={<CharacterDetailsPage/>} />
      </Routes>
    </>
  )
}

export default App
