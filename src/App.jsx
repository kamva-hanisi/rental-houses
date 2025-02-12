import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Card from './Components/Card/Card';

import { slides } from './data/carouselData.json';
import Sub from './Components/Sub-Card/Sub';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Slider data={slides}/>
      <Card />
      <Sub />
      <Footer/>
    </div>
  )
}

export default App
