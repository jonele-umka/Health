// import React, { useState, useEffect } from 'react'
// import slide1 from '../image/slide1.png'

// import './Slider.css'

// const img = [
// 	<img key={1} src={slide1} alt="slide1" />,
// 	<img key={2} src={'https://i.ibb.co/wNM6fV0/slide2.jpg'} alt=""/>,
// 	<img key={3} src={'https://i.ibb.co/WPp99G8/slide3.jpg'} alt=""/>
// ]
// export function Slider() {
// 	const [activeIndex, setActiveIndex] = useState(0)

// 	// Хук Effect
// 	useEffect(() => {
// 		// Запускаем интервал
// 		const interval = setInterval(() => {
// 			// Меняем состояние
// 			setActiveIndex((current) => {
// 				// Вычисляем индекс следующего слайда, который должен вывестись
// 				const res = current === img.length - 1 ? 0 : current + 1
// 				// Возвращаем индекс
// 				return res
// 			})
// 		}, 3000)
// 		// Выключаем интервал
// 		return () => clearInterval()
// 	}, [])

// 	// Вычисляем индекс предыдущего слайда
// 	const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// 	// Вычисляем индекс следующего слайда
// 	const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
// 	return (
// 		<div className="slider">
// 			<div className="slider-img slider-img-prev" key={prevImgIndex}>
// 			<img src="https://i.ibb.co/19zP7bq/arrow.png" alt="left" />
// 				{img[prevImgIndex]}
// 			</div>
// 			<div className="slider-img" key={activeIndex}>
// 				{img[activeIndex]}
// 			</div>
// 			<div className="slider-img slider-img-next" key={nextImgIndex}>
// 				{img[nextImgIndex]}
// 			</div>
// 		</div>
// 	)
// }
// import React from 'react'
// import Slider from 'react-slick'
// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'

// function Slider() {
// 	const settings = {
// 		dots: true,
// 		infinite: true,
// 		speed: 500,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 	}
// 	return (
//         <div>
//         <h2> Single Item</h2>
   
//       </div>
// 	)
// }

// export default Slider
