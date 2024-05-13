import { useState } from 'react'
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom'
import { Suspense } from 'react'

import './App.css'
import NotFound from './components/NotFound'
import Events from './components/getAllevents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Suspense fallback={<p>Loading ....</p>}>
 <BrowserRouter>
      <Routes>
      <Route path="/" element={<Events/>}> </Route>

      <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter> 
      </Suspense> 
    </>
  )
}

export default App
