import Carousel from 'react-bootstrap/Carousel';
import Review1 from './Photos/Shradhareview.jpg'
import Review2 from './Photos/Modireview.jpg'
import Review3 from './Photos/Rahulreview.jpg'


function UncontrolledExample() {
  return (
    <>
    <p id='service'>From Our Customers</p>
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Review1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Review2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Review3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default UncontrolledExample;