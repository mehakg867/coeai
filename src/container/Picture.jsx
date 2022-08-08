import Carousel from 'react-bootstrap/Carousel';
import IGDTUW2 from '../images/IGDTUW2.jpg';
import IGDTUW3 from '../images/IGDTUW3.jpg';
import IGDTUW1 from '../images/IGDTUW1.jpeg';
import './Picture.css';


function IndividualIntervalsExample() {
  return (
    <Carousel style={{display:'flex', flex:"80%",position:'relative',fontSize:'2vw'}}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={IGDTUW2}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={IGDTUW3}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={IGDTUW1}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;