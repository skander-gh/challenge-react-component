
import './App.css';
import Head from'./component/header';
import About from './component/about';
import Proj from './component/projects';
import Contact from './component/contact';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      <Head/>
      <About/>  
      <Proj/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
