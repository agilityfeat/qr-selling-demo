import React, { useState, ChangeEvent, FormEvent } from 'react'
import styles from '../forms.module.scss'

interface FormData {
	image: File | null
	xAxis: number
	yAxis: number
	width: number
	height: number
}

const ImageForm = function ImageForm(): JSX.Element {
	const [formData, setFormData] = useState<FormData>({
		image: null,
		xAxis: 0,
		yAxis: 0,
		width: 0,
		height: 0,
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: parseInt(value, 10),
		}))
	}

	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		setFormData((prevData) => ({
			...prevData,
			image: file || null,
		}))
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		// Perform form submission logic here
		console.log(formData)
		// Reset form
		setFormData({
			image: null,
			xAxis: 0,
			yAxis: 0,
			width: 0,
			height: 0,
		})
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.formGroup}>
					<label htmlFor="image">
						Image:
						<input
							className={styles.input}
							type="file"
							name="image"
							accept="image/*"
							onChange={handleImageChange}
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
							name="height"
							value={formData.height}
							onChange={handleInputChange}
							required
						/>
					</label>
				</div>
				<button type="submit" className={styles.submitButton}>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ImageForm
