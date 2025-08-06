import Events from '@/components/Events'
import Members from '@/components/Members'
import MorphingText from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import WhatweDo from '@/components/Whatwedo'
import Departments from '@/components/Department'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'


export default function Home() {
  return (
    <>
    <Background />
    <Navbar />
    <MorphingText />
    <AboutUs />
    <Departments />
    <Members />
    <Projects/>
    <Footer/>
    </>
  )
}