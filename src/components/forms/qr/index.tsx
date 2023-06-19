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
			<div className={styles.content}>
				<div className={styles.title}>
					<h2>QR Code Form</h2>
				</div>
				<div className={styles.contentBody}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<fieldset className={styles.fieldset}>
							<label htmlFor="text" className={styles.label}>
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
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="xAxis" className={styles.label}>
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
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="yAxis" className={styles.label}>
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
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="width" className={styles.label}>
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
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="height" className={styles.label}>
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
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label htmlFor="darkColor" className={styles.label}>
								Dark Color:
								<input
									className={styles.inputColor}
									type="color"
									id="darkColor"
									name="darkColor"
									value={formData.darkColor}
									onChange={handleInputChange}
									required
								/>
							</label>
						</fieldset>
						<fieldset className={styles.fieldset}>
							<label
								htmlFor="lightColor"
								className={styles.label}
							>
								Light Color:
								<input
									className={styles.inputColor}
									type="color"
									id="lightColor"
									name="lightColor"
									value={formData.lightColor}
									onChange={handleInputChange}
									required
								/>
							</label>
						</fieldset>
					</form>
				</div>
				<footer className={styles.footer}>
					<button className={styles.submitButton} type="submit">
						Generate QR Code
					</button>
				</footer>
			</div>
		</div>
	)
}

export default QRCodeForm
