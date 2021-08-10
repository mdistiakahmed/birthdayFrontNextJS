import React from 'react'
import { useState } from 'react'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import Styles from '../../styles/homepage/ImageSlider.module.css'
import ImageDescription from './ImageDescription'
import SideMenu from './SideMenu'

const ImageSlider = ({slides}) => {
    const [current,setCurrent] = useState(0)
    const lenght = slides.length

    const nextSlide = () => {
        setCurrent(current === lenght-1 ? 0 : current+1)
    }
    const prevSldie = () => {
        setCurrent(current === 0 ? lenght-1 : current-1)
    }

    return (
        <div className= {Styles.slideContainer}>
            <SideMenu className={Styles.xxx}/>
            <div className= {Styles.slider}>
                <FaArrowAltCircleLeft className={Styles.leftarrow } onClick={prevSldie} />
                <FaArrowAltCircleRight className={Styles.rightarrow} onClick={nextSlide} />
                {slides.map((slide, index) => {         
                    return (
                        <div className= {index === current? Styles.slideactive : Styles.slide} key = {index}>
                            {index === current ? (
                                <>
                                <img src={slide.image} alt="travel" className={Styles.image}/>
                                <p className={Styles.p}> {slide.title} </p>
                                </>
                            ) : null}
                        </div>
                    )
                }) }
            </div>
            {slides.map((slide, index) => {    
                if(index === current)    
                return (
                    <ImageDescription  description={slide.description} key={index}/>
                )
            })
            }

        </div>
    )
}

export default ImageSlider
