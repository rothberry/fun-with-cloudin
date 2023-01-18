import { useState, useRef } from "react"

const Form = ({ setDisplayImage }) => {
	const [name, setName] = useState("")
	const [imageFile, setImageFile] = useState(null)
	const [formData, setFormData] = useState({
		name: "",
		file: null,
	})

	const onImageAdded = (e) => {
		// debugger
		setImageFile(e.target.files[0])
	}

	const nameRef = useRef()
	const imageRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({
			nameRef: nameRef.current.value,
			imageRef: imageRef.current.files[0],
		})
		let imageData = new FormData()
		imageData.append("name", nameRef.current.value)
		imageData.append("imageFile", imageRef.current.files[0])
		// console.log(imageData)
		const postReqObj = {
			method: "POST",
			headers: {
				Accepts: "application/json",
			},
			body: imageData,
		}
		fetch("http://localhost:3000/api/upload", postReqObj)
			.then((r) => r.json())
			.then((data) => {
				console.log(data)
        setDisplayImage(data.imageUrl)
			})
			.catch((err) => console.error({ err }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				{/* <input type="text" onChange={(e) => setName(e.target.value)} /> */}
				<input type="text" ref={nameRef} />
			</label>
			<label>
				Image:
				{/* <input type="file" onChange={onImageAdded} /> */}
				<input type="file" ref={imageRef} />
			</label>
			<input type="submit" value="UPLOAD IMAGE" />
		</form>
	)
}

export default Form
