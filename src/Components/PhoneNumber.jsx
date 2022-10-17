import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react'
import styles from './PhoneNumber.module.css'

const PhoneNumber = () => {
	const [value, setValue] = useState()
	return (
		<div>
			<label htmlFor="tel">*Телефон застрахованного</label>
			{/* {telDirty && telError && (
            <div style={{ color: 'red' }}>{telError}</div>
        )} */}
			<PhoneInput			
				id={styles.tel}
				name="tel"
				onChange={setValue}
				value={value}
				placeholder="Введите свой номер телефона"
			/>
		</div>
	)
}
export default PhoneNumber
