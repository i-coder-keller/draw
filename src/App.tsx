import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from './router'
import { Toaster } from 'react-hot-toast'
function App() {
  return (
      <>
          <BrowserRouter>
            <Routes>
              {
                routers.map(r => (
                  <Route path={r.path} element={r.element} key={r.path}>
                    {
                      r.children && r.children.map(cr => <Route element={cr.element} path={cr.path} key={cr.path}></Route>)
                    }
                  </Route>
                ))
              }
            </Routes>
          </BrowserRouter>
          <Toaster />
      </>
  )
}

export default App
