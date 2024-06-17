import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Articles from '../components/Articles'
import Header from '../components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <Header>
      <Routes>
        <Route path="/articles" element={<Articles />} />
        

        
        </Routes>
      </Header>
    </section>
  )
}

export default App
