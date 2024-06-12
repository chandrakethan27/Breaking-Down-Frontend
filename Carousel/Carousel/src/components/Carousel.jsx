import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <Carousel 
        showArrows={true} 
        autoPlay={true} 
        infiniteLoop={true} 
        className='' 
        showStatus={false}
        showThumbs={false} // Hide thumbnails for a cleaner look
        dynamicHeight={true} // Adjust height dynamically based on content // Hide status to reduce clutter
     >
      <div>
        <img src="https://i.pinimg.com/originals/43/af/d0/43afd01dc42127c352f1fde070cc2be0.jpg" alt="Slide 1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://images8.alphacoders.com/114/thumb-1920-1144334.jpg" alt="Slide 2" />
        <p className="legend">Slide 2</p>
      </div>
      <div>
        <img src="https://moewalls.com/wp-content/uploads/2023/05/tanjiro-sun-halo-dragon-kimetsu-no-yaiba-thumb.jpg" alt="Slide 3" />
        <p className="legend">Slide 3</p>
      </div>
    </Carousel>
  );
};

export default MyCarousel;