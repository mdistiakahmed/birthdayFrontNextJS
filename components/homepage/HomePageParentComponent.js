import ImageSlider from './ImageSlider'
import Styles from '../../styles/homepage/HomePageParentComponent.module.css'
import { useState } from 'react'
import Header from './Header';

const HomePageParentComponent = () => {
    
    const [flag, setFlag] = useState(true);
    const [slides, setSlides] = useState([
        {image:'./4.jpg', title: "The billion dollar deal",description: "billions of dollar"},
        {image:'./5.jpg', title: "Michekl Jackson",description: "He is no more"},
        {image:'./6.jpg', title: "The beauty",description: "She was born on this day"},
        {image:'./1.jpg', title: "The beauty",description: "She was born on this day"}
        ]
    );

    const findEvent = (a,b) => {
        if(flag === true) {
            setSlides( [
                {image:'./1.jpg', title: "The billion dollar deal",description: "billions of dollar"},
                {image:'./2.jpg', title: "Michekl Jackson",description: "He is no more"},
                {image:'./3.jpg', title: "The beauty",description: "She was born on this day"}
            ])
        } else {
            setSlides( [
                {image:'./4.jpg', title: "The billion dollar deal",description: "billions of dollar"},
                {image:'./5.jpg', title: "Michekl Jackson",description: "He is no more"},
                {image:'./6.jpg', title: "The beauty",description: "She was born on this day"}
            ])

        }

        
       setFlag(!flag)
    }

    return (
        <div className={Styles.container}>
            <Header findEvent={findEvent}/>
            <ImageSlider slides={slides}/>
        </div>
    )
}

export default HomePageParentComponent
