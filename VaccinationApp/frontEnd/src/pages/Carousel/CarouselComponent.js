import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllVaccines } from '../../store/Vaccine/Vaccine-actions';
;
import CarouselItem from './CarouselItem';
import { productData, responsive } from './data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Carousel.css';

export default function CarouselComponent(props) {
    const dispatch = useDispatch();
   debugger;
    const vaccines = useSelector((state)=> state.vaccine.vaccines);
    console.log(vaccines)
;    useEffect(() => {
      dispatch(getAllVaccines());
  
    }, []);

    const product = vaccines.map((item, index) => (
      <CarouselItem
          key={index} // Assign a unique key using index
          name={item.name}
          images={item.images}
          price={item.price}
          description={item.description}
          age={item.age}
          dose={item.dose}
          gender={item.gender}
         
      />
    ));

    return (
        <div className="App">
            <Carousel 
                responsive={responsive}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                infinite={true}
            >
                {product}
            </Carousel>
        </div>
    );
}