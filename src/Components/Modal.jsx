import React, { useState } from 'react'
import styles from './Modal.module.css'
import close from '../image/Закрыть.svg'
export default function Modal(props) {
	const [login, setLogin] = useState('')
	const [loginError, setLoginError] = useState('')
	const [password, setPassword] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [sum, setSum] = useState('')
	const [treatment, setTreatment] = useState('')

	const sumHandler = (e) => {
		setSum(parseInt(e.target.value))
	}
	const treatmentHandler = (e) => {
		setTreatment(e.target.value)
	}
	console.log(sum)
	console.log(treatment)
	const loginHandler = (e) => {
		setLogin(e.target.value)
		const loginVal =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!loginVal.test(String(e.target.value).toLowerCase())) {
			setLoginError('Некорректный ввод Email')
			if (!e.target.value.length) {
				setLoginError('')
			}
		} else {
			setLoginError('')
		}
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
		if (e.target.value.length < 8 && e.target.value.length >= 1) {
			setPasswordError('Пароль должен быть длиннее 8')
		} else if (!e.target.value.length) {
			setPasswordError('')
		} else {
			setPasswordError('')
		}
	}

	return (
		<div className={styles.window}>
			<div className={styles.wrapper}>
				<div className={styles.windowHead}>
					<h1>
						<span>Полис: </span>ДМС Ф 000000 <br />
						<span> Застрахованный: </span>Фамилия Имя Отчество
						<br />
						<span> Срок действия: </span>00.00.0000 - 00.00.0000 <br />
						<span>Доступный баланс:</span>000 000.00 СОМ
					</h1>

					<img onClick={props.closeModal} src={close} alt="close" />
				</div>
				<div className={styles.windowForm}>
					<div className={styles.formBox}>
						<div>
							<label htmlFor="sum">Сумма оплаты</label>
							<input
							value={sum}
								onChange={sumHandler}
								id={styles.sum}
								name="sum"
								type="number"
								placeholder="0000000"
							/>
						</div>
						<div>
							<label htmlFor="treatment">Произведенное лечение</label>
							<input
							value={treatment}
								onChange={treatmentHandler}
								id={styles.treatment}
								name="treatment"
								type="text"
								placeholder="ххххххххххх"
							/>
						</div>
						<div>
							<label htmlFor="login">Логин клиники</label>
							{loginError && <div style={{ color: 'red' }}>{loginError}</div>}
							<input
							value={login}
								onChange={loginHandler}
								id={styles.login}
								name="login"
								type="text"
								placeholder="ххххххххххх"
							/>
						</div>
						<div>
							<label htmlFor="password">Пароль</label>
							{passwordError && (
								<div style={{ color: 'red' }}>{passwordError}</div>
							)}
							<input
							value={password}
								onChange={passwordHandler}
								id={styles.password}
								name="password"
								type="password"
								placeholder="********"
							/>
						</div>
					</div>
					<div className={styles.button}>
						<button type="submit" className={styles.formButton1}>
							Подтвердить оплату
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
