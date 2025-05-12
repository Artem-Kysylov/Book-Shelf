import { Routes, Route } from 'react-router-dom'

// Components and routes imports 
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { Home } from './routes/home/Home'
import { NotFound } from './routes/not-found/NotFound'
import { Book } from './routes/book/Book'

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
