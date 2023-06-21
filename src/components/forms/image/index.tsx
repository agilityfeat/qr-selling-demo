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
	handleOnSave: (options: ShowImageParams) => void
	handleOnClose: () => void
}

const ImageForm = function ImageForm({
	handleOnSave,
	handleOnClose,
}: Props): JSX.Element {
	const [formData, setFormData] = useState<FormData>({
		image: null,
		xAxis: 0,
		yAxis: 0,
		width: 240,
		height: 320,
	})

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
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
		handleOnSave({
			image: formData.image as File,
			imgHeight: formData.height,
			imgWidth: formData.width,
			imgPositionX: formData.xAxis,
			imgPositionY: formData.yAxis,
		})
		handleOnClose()
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.title}>
					<h2>Add Image</h2>
				</div>
				<form onSubmit={handleSubmit}>
					<div className={styles.contentBody}>
						<div className={styles.form}>
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
								<label
									htmlFor="height"
									className={styles.label}
								>
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
						</div>
					</div>
					<footer className={styles.footer}>
						<button type="submit" className={styles.submitButton}>
							Submit
						</button>
					</footer>
				</form>
			</div>
		</div>
	)
}

export default ImageForm
