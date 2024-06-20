import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Articles from './components/Articles'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Article from './components/Article'


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Header />
      <Routes>
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
        

        
        </Routes>
    
    </section>
  )
}

export default App
