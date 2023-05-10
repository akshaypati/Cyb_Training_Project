import React from 'react'

import { Carousel } from 'react-bootstrap'
import img4 from "../images/img4.webp"
import Navbar from './userDashbordComponenets/Navbar'


function Home() {
  return (
    <>
      <Navbar></Navbar>
            
            <Carousel fade> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <br></br>
                        <br></br>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2018/03/27/00/33/music-3264716_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <br></br>
                        <br></br>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/04/16/09/57/watercolor-5049980_960_720.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <br></br>
                        <br></br>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2016/11/22/19/33/asian-cuisine-1850233_960_720.jpg"
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <br></br>
                        <br></br>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

    </>
  )
}

export default Home
