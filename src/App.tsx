import './App.css'
import Header from './components/header'
import Main from './components/main'

function App() {

  return (
    <div className="bg-[url('./assets/images/background-desktop.png')] w-full h-full bg-cover">
      <div className="bg-[url('./assets/images/pattern-squiggly-line-bottom-desktop.svg')] bg-cover w-full h-auto"></div>
      <Header/>
      <Main/>
    </div>
  )
}

export default App