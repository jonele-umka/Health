import React, { useState } from 'react'
import styles from './Form.module.css'
import 'react-phone-number-input/style.css'
import PhoneNumber from './PhoneNumber'

function Form() {
	const [names, setNames] = useState('')
	const [inn, setInn] = useState('')
	const [address, setAddress] = useState('')
	const [num, setNum] = useState('')
	const [sum, setSum] = useState(0)
	const [creditStart, setCreditStart] = useState('')
	const [creditEnd, setCreditEnd] = useState('')
	const [login, setLogin] = useState('')
	const [namesError, setNamesError] = useState('')
	const [password, setPassword] = useState('')
	const [innError, setInnError] = useState('')
	const [addressError, setAddressError] = useState('')
	const [sumError, setSumError] = useState('')
	const [numError, setNumError] = useState('')
	const [loginError, setLoginError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [state, setState] = useState({
		username: null,
		password: null,
	})

	const handler = (e) => {
		setState((prev) => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			}
		})
	}

	const namesHandler = (e) => {
		setNames(e.target.value)
		const namesSymVal = /^[0-9@!#\$\^%&*()+=\-\[\]\\\';,\.\/\{\}\|\":<>\? ]+$/
		const namesLatVal = /[a-zA-Z\-\'\ ]/i
		if (namesSymVal.test(String(e.target.value).toUpperCase())) {
			setNamesError('Нельзя использовать спец символы и числа!')
			if (!e.target.value.length) {
				return e
				setNamesError('')
			}
		} else if (namesLatVal.test(String(e.target.value))) {
			setNamesError('Введите пожалуйста на кириллице')
		} else {
			setNamesError('')
		}
	}

	const innHandler = (e) => {
		setInn(e.target.value)
		if (e.target.value.length >= 1 && e.target.value.length < 14) {
			setInnError('ИНН должен быть не меньше 14')
		} else if (!e.target.value.length) {
			setInnError('')
		}
		// if (e.target.value.charAt(0) == 2 || 1) {
		// 	setInnError('www')
		// }
		else if (e.target.value.length == 14) {
			setInnError('')
		}
	}
	const addressHandler = (e) => {
		setAddress(e.target.value)
		const addressLatVal = /[a-zA-Z\-\'\ ]/i
		if (addressLatVal.test(String(e.target.value))) {
			setAddressError('Введите пожалуйста на кириллице')
			if (!e.target.value.length) {
				return e
				setAddressError('')
			}
		} else {
			setAddressError('')
		}
	}
	const numHandler = (e) => {
		setNum(e.target.value)
	}
	const sumHandler = (e) => {
		setSum(parseInt(e.target.value))
	}

	const creditStartHandler = (e) => {
		setCreditStart(e.target.value)
	}
	const creditEndtHandler = (e) => {
		setCreditEnd(e.target.value)
	}
	const loginHandler = (e) => {
		setLogin(e.target.value)

		const loginVal =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		if (!loginVal.test(String(e.target.value).toLowerCase())) {
			setLoginError('Некорректный ввод Email')
			if (!e.target.value.length) {
				return e
				setLoginError('')
			}
		} else {
			setLoginError('')
		}
	}
	const passwordHandler = (e) => {
		setPassword(e.target.value)
		const passWordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
		if (!passWordVal.test(String(e.target.value))) {
			setPasswordError('Некорректный ввод Пароля')
			if (!e.target.value.length) {
				setPasswordError('')
			}
		} else {
			setPasswordError('')
		}
	}
	console.log(inn)
	return (
		<div className={styles.form}>
			<div className="container">
				<h1>ОФОРМИТЬ ПОЛИС</h1>
				<div className={styles.formBlocks}>
					<form action="#">
						<div className={styles.formBox}>
							<div className={styles.box}>
								<label htmlFor="name">*Фамилия застрахованного</label>
								{namesError && <div style={{ color: 'red' }}>{namesError}</div>}
								<input
									value={names}
									onChange={namesHandler}
									name="name"
									id={styles.name}
									type="text"
									placeholder="Ф.И.О"
								/>
							</div>
							<div className={styles.box}>
								<label htmlFor="inn">*ИНН застрахованного</label>
								{innError && <div style={{ color: 'red' }}>{innError}</div>}
								<input
									onInput={(e) => {
										if (e.target.value.length > e.target.maxLength)
											e.target.value = e.target.value.slice(
												0,
												e.target.maxLength
											)
									}}
									maxLength={14}
									onChange={innHandler}
									value={inn}
									id={styles.inn}
									name="inn"
									type="number"
									placeholder="200000000000000"
								/>
							</div>
							<div className={styles.box}>
								<label htmlFor="address">*Адрес застрахованного</label>
								{addressError && (
									<div style={{ color: 'red' }}>{addressError}</div>
								)}
								<input
									value={address}
									onChange={addressHandler}
									id={styles.address}
									name="address"
									type="text"
									placeholder="г. Название, ул. Название, № дома"
								/>
							</div>
							<div>
								<PhoneNumber />
							</div>
							<div className={styles.box}>
								<label htmlFor="num">*Номер кредитного договора</label>

								<input
									pattern="[0-9]*"
									inputMode="numeric"
									onChange={numHandler}
									value={num}
									id={styles.num}
									name="num"
									type="number"
									placeholder="000000000000000"
								/>
							</div>
							<div className={styles.box}>
								<label htmlFor="sum">*Сумма кредита (сом)</label>
								{sumError && <div style={{ color: 'red' }}>{sumError}</div>}
								<input
									onInput={(e) => {
										if (e.target.value.charAt(0) == 0) {
											e.target.value = e.target.value.slice(0, e.target.value)
											setSumError('Удалите 0')
											if (!e.target.value) {
												setSumError('')
											}
										} else {
											setSumError('')
										}
									}}
									minLength={1}
									pattern="[1-9]*"
									inputMode="numeric"
									onChange={sumHandler}
									value={sum}
									id={styles.sum}
									name="sum"
									type="number"
									placeholder="000000"
								/>
							</div>
							{/* <div>
								<label htmlFor="tel">*Телефон застрахованного</label>
								{telDirty && telError && (
									<div style={{ color: 'red' }}>{telError}</div>
								)}
								<input
								
									id={styles.tel}
									name="tel"
									type="number"
									placeholder="+7 000 000 00 00"
								/>
							</div> */}
						</div>
					</form>
					<div className={styles.formBlock}>
						<form action="#">
							<div className={styles.formBox2}>
								<div className={styles.box2}>
									<label htmlFor="creditStart">*Дата начала кредита</label>
									<input
										onChange={creditStartHandler}
										value={creditStart}
										id={styles.creditStart}
										name="creditStart"
										type="date"
										placeholder="00.00.0000"
									/>
								</div>
								<div className={styles.box2}>
									<label htmlFor="creditEnd">*Дата окончания кредита</label>
									<input
										onChange={creditEndtHandler}
										value={creditEnd}
										id={styles.creditEnd}
										name="creditEnd"
										type="date"
										placeholder="00.00.0000"
									/>
								</div>
								<div className={styles.box2}>
									<label htmlFor="login">*Логин Агента</label>
									{loginError && (
										<div style={{ color: 'red' }}>{loginError}</div>
									)}
									<input
										value={login}
										onChange={loginHandler}
										id={styles.login}
										name="login"
										type="text"
										placeholder="ХХхХхХХх"
									/>
								</div>
								<div className={styles.box2}>
									<label htmlFor="password">*Пароль</label>
									{passwordError && (
										<div style={{ color: 'red' }}>{passwordError}</div>
									)}
									<input
										onChange={passwordHandler}
										value={password}
										id={styles.password}
										name="password"
										type="password"
										placeholder="********"
									/>
								</div>
							</div>
						</form>
						<div>
							<div className={styles.lang}>
								<label htmlFor="POST">*Язык полиса</label>
								<div className={styles.checkBox}>
									<div>
										<input
											type="radio"
											id="rus"
											name="language"
											value="Russian"
										/>
										<label htmlFor="rus">Русский</label>
									</div>
									<div>
										<input
											type="radio"
											id="kgz"
											name="language"
											value="Kyrgyz"
										/>
										<label htmlFor="kgz">Кыргызский</label>
									</div>
								</div>
							</div>
							<div className={styles.result}>
								<label htmlFor="">Стоимость полиса</label>
								<h1>1250.00 сом. (в. т. НсП 3%)</h1>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.formButton}>
					<div>
						<button type="submit" className={styles.formButton1}>
							Подтвердить оплату
						</button>
					</div>
					<div>
						<button type="submit" className={styles.formButton2}>
							выданные полисы
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Form
