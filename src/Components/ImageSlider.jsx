import { useState } from 'react'
import '../index.css'

const slideStyles = {
	width: '100%',
	height: '100%',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
}

const rightArrowStyles = {
	position: 'absolute',
	top: '50%',
	transform: 'translate(0, -50%)',
	right: '32px',
	fontSize: '45px',
	color: '#fff',
	zIndex: 1,
	cursor: 'pointer',
}

const leftArrowStyles = {
	position: 'absolute',
	top: '50%',
	transform: 'translate(0, -50%) rotate(180deg)',
	left: '32px',
	fontSize: '45px',
	color: '#fff',
	zIndex: 1,
	cursor: 'pointer',
}

const sliderStyles = {
	position: 'relative',
	height: '100%',
	marginBottom: '60px'
}

const dotsContainerStyles = {
	display: 'flex',
	justifyContent: 'center',
	position: "absolute",
    bottom: "10px",
    left: "50%",
}

const dotStyle = {
	margin: '0 3px',
	cursor: 'pointer',
	fontSize: '20px',
}

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}
	const slideStylesWidthBackground = {
		...slideStyles,
		backgroundImage: `url(${slides[currentIndex].url})`,
	}

	return (
		<div style={sliderStyles}>
			<div>
				<div className="container">
					<div onClick={goToPrevious} style={leftArrowStyles}>
						<img src="https://i.ibb.co/19zP7bq/arrow.png" alt="left" />
					</div>
					<div></div>
					<div onClick={goToNext} style={rightArrowStyles}>
						<img src="https://i.ibb.co/19zP7bq/arrow.png" alt="right" />
					</div>
				</div>
			</div>
			<div style={slideStylesWidthBackground}></div>
			<div style={dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div
						style={dotStyle}
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
					>
						●
					</div>
				))}
			</div>
		</div>
	)
}

export default ImageSlider
