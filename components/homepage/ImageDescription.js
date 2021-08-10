import Styles from '../../styles/homepage/ImageDescription.module.css'


const ImageDescription = ({description}) => {
    return (
        <div className={Styles.description}>
            {description}      
        </div>
    )
}

export default ImageDescription
