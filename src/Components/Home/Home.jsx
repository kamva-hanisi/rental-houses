import styles from './Home.module.css';

const Home = () => {
  return (
    <><div className={styles.Home}>
      <div className={styles.slider}>
        <div className={styles.wrapper}>
          <div id="wowslider-container1">
            <div className="ws_images"><ul>
              <li><img src="assets/Home/slider/data1/images/house03.jpg" alt="House Rental System" title="House Rental System" id="wows1_0" /></li>
              <li><a href="http://wowslider.net"><img src="assets/Home/slider/data1/images/pexelsphoto186077.jpg" alt="jquery carousel" title="Luxury Houses for Rent" id="wows1_1" /></a></li>
              <li><img src="assets/Home/slider/data1/images/39f6e0639465c7e01eaa79e26ada2a48.jpg" alt="Rent Houses at Affordable Price" title="Rent Houses at Affordable Price" id="wows1_2" /></li>
            </ul></div>
            <div className={styles.ws_images}><div>
              <a href="#" title="House Rental System"><span><img src="assets/Home/slider/data1/tooltips/house03.jpg" alt="House Rental System" />1</span></a>
              <a href="#" title="Luxury Houses for Rent"><span><img src="assets/Home/slider/data1/tooltips/pexelsphoto186077.jpg" alt="Luxury Houses for Rent" />2</span></a>
              <a href="#" title="Rent Houses at Affordable Price"><span><img src="assets/Home/slider/data1/tooltips/39f6e0639465c7e01eaa79e26ada2a48.jpg" alt="Rent Houses at Affordable Price" />3</span></a>
            </div></div>
            <div className={styles.ws_shadow}></div>
          </div>
          <script type="text/javascript" src="assets/Home/slider/engine1/wowslider.js"></script>
          <script type="text/javascript" src="assets/Home/slider/engine1/script.js"></script>
        </div>
      </div>
    </div>
    <div className={styles.main}>
        <div className={styles.wrapper}>
          <h3>Recently Added</h3>

          <div className={styles.clearfix}>

            <div className={styles.houses}>
              <img src="assets/Home/house.jpg" />
              <span className="house-title">Som Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <a href="book.html">
                <button type="button" className="btn-book">Book House</button>
              </a>
            </div>

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Ram Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Shyam Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Hari Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>
            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Kumari Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

          </div>

          <h3>Luxurious Houses</h3>
          
          <div className="clearfix">

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Som Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Ram Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>


            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Shyam Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Hari Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>
            <div className="houses">
              <img src="images/house.jpg" />
              <span className="house-title">Kumari Bahadur House</span><br />
              <span className="house-added">Added Date:01-03-2017</span><br />
              <span className="house-location">Location: Sano Thimi, Bhaltapur Nepal</span><br />
              <button type="button" className="btn-book">Book House</button>
            </div>

          </div>
        </div>
      </div></>
  )
}

export default Home
