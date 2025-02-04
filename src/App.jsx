import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Card from './Components/Card/Card';

import { slides } from './data/carouselData.json';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Slider data={slides}/>
      <Card />
    </div>
  )
}

export default App
