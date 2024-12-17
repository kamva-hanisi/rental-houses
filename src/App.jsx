import styles from './App.module.css';
import Carousel from './Components/Carousel/Carousel';
import Navbar from './Components/Navbar/Navbar';
// import AboutUs from './Components/About Us/AboutUs';
// import Home from './Components/Home/Home';


const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Carousel />
      {/* <Home /> */}
      {/* <AboutUs /> */}
    </div>
  )
}

export default App
