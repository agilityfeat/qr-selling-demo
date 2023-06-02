import React, { useState, ChangeEvent, FormEvent } from 'react'
import styles from '../forms.module.scss'

interface FormData {
	text: string
	xAxis: number
	yAxis: number
	width: number
	height: number
	darkColor: string
	lightColor: string
}

const QRCodeForm = function QRCodeForm(): JSX.Element {
	const [formData, setFormData] = useState<FormData>({
		text: '',
		xAxis: 0,
		yAxis: 0,
		width: 128,
		height: 128,
		darkColor: '#000000',
		lightColor: '#FFFFFF',
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Perform form submission logic here
		console.log(formData)
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>QR Code Form</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="text">
						Text:
						<input
							className={styles.input}
							type="text"
							id="text"
							name="text"
							value={formData.text}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="xAxis">
						X-Axis:
						<input
							className={styles.input}
							type="number"
							id="xAxis"
							name="xAxis"
							value={formData.xAxis}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="yAxis">
						Y-Axis:
						<input
							className={styles.input}
							type="number"
							id="yAxis"
							name="yAxis"
							value={formData.yAxis}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="width">
						Width:
						<input
							className={styles.input}
							type="number"
							id="width"
							name="width"
							value={formData.width}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="height">
						Height:
						<input
							className={styles.input}
							type="number"
							id="height"
							name="height"
							value={formData.height}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="darkColor">
						Dark Color:
						<input
							className={styles.input}
							type="color"
							id="darkColor"
							name="darkColor"
							value={formData.darkColor}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="lightColor">
						Light Color:
						<input
							className={styles.input}
							type="color"
							id="lightColor"
							name="lightColor"
							value={formData.lightColor}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<div className={styles.formGroup}>
					<button className={styles.submitButton} type="submit">
						Generate QR Code
					</button>
				</div>
			</form>
		</div>
	)
}

export default QRCodeForm
