import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CustomCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="slider">
      <Carousel responsive={responsive}>
        <div className="card">
          <img 
          className="card-image"
          src="assets/Home/house.jpg" alt="image" />
          <p><span className="house-title">Som Bahadar House</span></p>
          <p><span className="house-added">Added Date: 16-AUG-2021</span></p>
          <p><span className="house-location">Location: Albetorn, SkyCity</span></p>
        </div>
        <div className="card">
          <img 
          className="card-image"
          src="assets/Home/house.jpg" alt="image" />
          <p><span className="house-title">Som Bahadar House</span></p>
          <p><span className="house-added">Added Date: 16-AUG-2021</span></p>
          <p><span className="house-location">Location: Albetorn, SkyCity</span></p>
        </div>
        <div className="card">
          <img 
          className="card-image"
          src="assets/Home/house.jpg" alt="image" />
          <p><span className="house-title">Som Bahadar House</span></p>
          <p><span className="house-added">Added Date: 16-AUG-2021</span></p>
          <p><span className="house-location">Location: Albetorn, SkyCity</span></p>
        </div>
        <div className="card">
          <img 
          className="card-image"
          src="assets/Home/house.jpg" alt="image" />
          <p><span className="house-title">Som Bahadar House</span></p>
          <p><span className="house-added">Added Date: 16-AUG-2021</span></p>
          <p><span className="house-location">Location: Albetorn, SkyCity</span></p>
        </div>
      </Carousel>
    </div>
  )
}

export default CustomCarousel
