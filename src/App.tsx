import { useEffect, useState } from 'react'
import './index.css'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import TopNav from './components/TopNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
      // hide loader after its fade-out animation (600ms)
      setTimeout(() => setLoaderVisible(false), 700)
    }, 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader visible={loaderVisible} />
      <CustomCursor />
      <TopNav loaded={loaded} />
      <Hero loaded={loaded} />
<About />
      <Projects />
      <Contact />
    </>
  )
}
