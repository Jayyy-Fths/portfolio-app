import Nav          from '../components/Nav'
import Hero         from '../components/Hero'
import About        from '../components/About'
import Skills       from '../components/Skills'
import Projects     from '../components/Projects'
import Experience   from '../components/Experience'
import Testimonials from '../components/Testimonials'
import Blog         from '../components/Blog'
import Contact      from '../components/Contact'
import Footer       from '../components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
