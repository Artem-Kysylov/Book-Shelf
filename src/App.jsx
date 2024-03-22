import { Routes, Route } from 'react-router-dom'

// Components and routes imports 
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './routes/Home'
import { NotFound } from './routes/NotFound'
import { Book } from './routes/Book'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/books/:id' element={<Book/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
