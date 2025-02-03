import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';

import { slides } from './data/carouselData.json';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Slider data={slides}/>
    </div>
  )
}

export default App
