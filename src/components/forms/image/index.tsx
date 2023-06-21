import React, { useState, ChangeEvent, FormEvent } from 'react'
import { ShowImageParams } from '@/components/stream/useTransform'
import styles from '../forms.module.scss'

interface FormData {
	image: File | null
	xAxis: number
	yAxis: number
	width: number
	height: number
}

interface Props {
	handleSave: (options: ShowImageParams) => void
}

const ImageForm = function ImageForm({ handleSave }: Props): JSX.Element {
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
		handleSave({
			image: formData.image as File,
			imgHeight: formData.height,
			imgWidth: formData.width,
			imgPositionX: formData.xAxis,
			imgPositionY: formData.yAxis,
		})
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
			<div className={styles.content}>
				<div className={styles.title}>
					<h2>Add Image</h2>
				</div>
				<div className={styles.contentBody}>
					<form className={styles.form} onSubmit={handleSubmit}>
						<fieldset className={styles.fieldset}>
							<label className={styles.label} htmlFor="image">
								Image:
								<input
									className={styles.input}
									type="file"
									id="image"
									accept="image/*"
									onChange={handleImageChange}
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
									value={formData.height}
									onChange={handleInputChange}
									required
								/>
							</label>
						</fieldset>
					</form>
				</div>
				<footer className={styles.footer}>
					<button type="submit" className={styles.submitButton}>
						Submit
					</button>
				</footer>
			</div>
		</div>
	)
}

export default ImageForm
