import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Web Tasarımı ve Programlama</h1>
        <h2>Lab-1</h2>
        <p>Ad Soyad: Hilmi Salih Altinisik</p>
        <p>Öğrenci No: 235541042</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
