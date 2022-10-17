import React from 'react'
import styles from './Insurance.module.css'
import mobile1 from '../image/smart1.png'
import mobile2 from '../image/smart2.png'
import playMarket from '../image/playMarket.png'
import appStore from '../image/appStore.png'
import arrow from '../image/Стрела.svg'
function Insurance(props) {
	return (
		<div className={styles.insurance}>
			<div className={styles.background}></div>
			<div className="container">
				<h1>медицинское страхование дмс</h1>
				<div className={styles.insuranceBlock}>
					<div className={styles.mobileImg}>
						<img src={mobile2} alt="mobile" />
						<img src={mobile1} alt="mobile" />
					</div>
					<div className={styles.insuranceText}>
						<p>
							Получайте возмещение понесенных расходов согласно предоставленным
							чекам
						</p>
						<p>
							Круглосуточная служба врачей-координаторов проконсультирует и
							направит в удобную клинику
						</p>
						<p>Возможность безналичной оплаты в клиниках-партнерах</p>
						<p>
							Полис включает в себя доступ в приложение мой доктор на год +
							неограниченные видео-консультации терапевта/педиатра
						</p>
						<p>
							Отслеживайте страховые лимиты и произведенные выплаты в мобильном
							приложении
						</p>
						<div className={styles.appMarket}>
							<div>
								<a href="#">
									<img src={playMarket} alt="playMarket" />
								</a>
								<a href="#">
									<img src={appStore} alt="appStore" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.polis}>
					<h1>проверить полис дмс</h1>
					<div className={styles.polisBlock}>
						<input type="text" placeholder="ДМС - Х000" />
						<button onClick={props.openModal}>Проверить полис</button>
					</div>
				</div>
				<div className={styles.pdf}>
					<div>
						<h2>памятка по получению страхового возмещенгия (PDF)</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
					<div>
						<h2>заявление на страховаое возмещение (pdf)</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
					<div>
						<h2>правила комплексного страхования (PDF)</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
					<div>
						<h2>правила добровольного медицинского страхования (pdf)</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
					<div>
						<h2>правила добровольного медицинского страхования (pdf)</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
					<div>
						<h2>свидетелство о регистрации</h2>
						<a href="#">
							<img src={arrow} alt="arrow" />
						</a>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<h3>
					2019-2022 Все права защищены | ЗАО Страховая компания «Здоровье»
				</h3>
			</div>
		</div>
	)
}

export default Insurance
