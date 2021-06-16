import Navbar from './Navbar'
import Header from './components/Header'
import Projects from './components/Project'
import About from './components/About'
import Landing from './components/Landing'
import Space from './components/Space'
import Mid from './components/Mid'
import './App.css'



function App() {
  return (
    <body>
      <Navbar />
      <Landing />
      <Space />
      {/* <Header title="About Me"/> */}
      <About />
      {/* <Mid /> */}
      {/* <Header title="Projects"/> */}
      <Projects />
      <Header title=""/>
      <Projects />
      <Header title=""/>
      <Projects />
      {/*<Content>
        <ProjectUAV />
      </Content>
      <Header />
      <Content>
        <ResumeSection />
      </Content> */}
    </body>
  );
}

export default App;
