// import { Slider } from './Components/Slider'
import './App.css'
import Services from './Components/Services'
import ImageSlider from './Components/ImageSlider'
import Form from './Components/Form'
import Insurance from './Components/Insurance'
import Modal from './Components/Modal'
import { useState } from 'react'
import Slider from 'react-slick'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import logo1 from './image/Logo1.svg'
import logo2 from './image/Logo2.png'
import twitter from './image/twitter.svg'
import faceBook from './image/faceBook.svg'
import instagram from './image/instagram.svg'

const App = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	const containerStyles = {
		width: '100%',
		height: '100vh',
	}
	const [modalActive, setModalActive] = useState(false)
	return (
		<div>
			<div style={containerStyles}>
				<Slider {...settings}>
					<div className="slide slide1">
						<div className="logo container">
							<a href="#">
								<img src={logo1} alt="logo" />
							</a>
							<a href="#">
								<img src={logo2} alt="logo" />
							</a>
						</div>
						<div className="slideText">
							<h1>
								врачи на видео-связи по <br /> всему кыргыстану
							</h1>
							<p>Круглосуточная служба экстренных консультаций терапевта</p>
						</div>
						<div className='social'>
							<a href="#"><img src={twitter} alt="twitter" /></a>
							<a href="#"><img src={faceBook} alt="faceBook" /></a>
							<a href="#"><img src={instagram} alt="instagram" /></a>
							
						</div>
					</div>
					<div className="slide slide2">
						<div className="slideText">
							<h1>
								врачи на видео-связи по <br /> всему кыргыстану
							</h1>
							<p>Круглосуточная служба экстренных консультаций терапевта</p>
						</div>
					</div>
					<div className="slide slide3">
						<div className="slideText">
							<h1>
								врачи на видео-связи по <br /> всему кыргыстану
							</h1>
							<p>Круглосуточная служба экстренных консультаций терапевта</p>
						</div>
					</div>
				</Slider>
				<Services />
				<Form />
				<Insurance openModal={() => setModalActive(true)} />
				{modalActive ? (
					<Modal closeModal={() => setModalActive(false)} />
				) : null}
			</div>
		</div>
	)
}
export default App
