import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from './router'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          {
            routers.map(r => <Route path={r.path} element={r.element} key={r.path} />)
          }
        </Routes>
      </BrowserRouter>
  )
}

export default App
