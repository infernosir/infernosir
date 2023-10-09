import Carousel from 'react-bootstrap/Carousel';
import Drools from './Photos/Catdrools.jpg'
import Pedigree from './Photos/Pedigree_Wet_Food.webp'


function UncontrolledExample() {
  return (
    <Carousel className='carousel' data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Drools}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pedigree}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;