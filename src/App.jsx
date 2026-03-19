import Name from "./components/name"
import Intro from "./components/intro"
import Interest from "./components/interest"
import Projects from "./components/projects"
import Skills from "./components/skills"
import Contact from "./components/contact"

function App() {
  return (
  <main style={{ overflowX: "hidden" }}>
    <Name />
    <Intro />
    <Interest />
    <Projects />
    <Skills />
    <Contact />
  </main>
)
}

export default App