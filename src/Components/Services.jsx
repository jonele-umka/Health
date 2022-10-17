import React from 'react'
import '../index.css'
import styles from './Services.module.css'
import service1 from '../image/service1.png'
import service2 from '../image/service2.png'
import service3 from '../image/service3.png'
import service4 from '../image/service4.png'
import service5 from '../image/service5.png'
import plus from '../image/plus.svg'
import playMarket from '../image/playMarket.png'
import appStore from '../image/appStore.png'
import mobile1 from '../image/mobile1.png'
import mobile2 from '../image/mobile2.png'

export default function Services() {
	return (
		<div className={styles.healthBlock1}>
			<div className="container">
				<div className={styles.services}>
					<div className={styles.headText}>
						<h1>Комплексное страхование заемщика</h1>
						<h3>
							От несчастных случаев, болезней и финансовых рисков, связанных с
							утратой трудоспособности
						</h3>
						<p>
							Возмещение вреда жизни и здоровью в резултате несчастного случая,
							повлешего:
						</p>
					</div>
					<div className={styles.serviceBox}>
						<div>
							<img src={service1} alt="service" />
							<p>
								Лечение <br />в стационаре
							</p>
						</div>
						<div>
							<img src={service2} alt="service" />
							<p>
								Хирургические <br /> операции
							</p>
						</div>
						<div>
							<img src={service3} alt="service" />
							<p>Травмы и переломы</p>
						</div>
						<div>
							<img src={service4} alt="service" />
							<p>Получение инвалидности</p>
						</div>
						<div>
							<img src={service5} alt="service" />
							<p>Летальный исход</p>
						</div>
					</div>
					<div className={styles.serviceText}>
						<div>
							<img src={plus} alt="plus" />
							<h1>Лечение в любых учреждениях Кыргыстана</h1>
						</div>
						<div>
							<img src={plus} alt="plus" />
							<h1>
								Размеры возмещений заранее оговорены в <br /> правилах
								страхования
							</h1>
						</div>
						<div>
							<img src={plus} alt="plus" />
							<h1>
								Плановые операции и лечение не <br /> оплачиваются
							</h1>
						</div>
					</div>
				</div>
                <div className={styles.background}></div>
				<div className={styles.mobileApp}>
					<div className={styles.apps}>
						<div className={styles.appMarket}>
							<h1>
								Полис включает в себя доступ в приложение мой доктор на год +
								неограниченные видео-консультации терапевта/педиатра
							</h1>
							<div>
								<a href="#"><img
									src={playMarket}
									alt="playMarket"
								/></a>
								<a href="#"><img
									src={appStore}
									alt="appStore"
								/></a>
								
							</div>
						</div>
						<div className={styles.mobileImg}>
							<img src={mobile2} alt="mobile" />
							<img src={mobile1} alt="mobile" />
						</div>
					</div>
				</div>
			
			</div>
		</div>
	)
}
