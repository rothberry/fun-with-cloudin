import { useRef, useState } from "react"

const Form = ({ setImage }) => {
	const nameRef = useRef()
	const imageRef = useRef()
	const [imageLink, setImageLink] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log({ nameRef, imageRef })
		let imageData = new FormData()
		imageData.append("file", imageRef.current.files[0])
		imageData.append("name", nameRef.current.value)
		console.log(imageData)
		const postReqObj = {
			method: "POST",
			headers: {
				Accepts: "application/json",
			},
			body: imageData,
		}
		fetch("http://localhost:3000/api/upload", postReqObj)
			.then((r) => r.json())
			.then((imageRes) => {
				console.log(imageRes)
				setImage(imageRes)
			})
			.catch((err) => console.error({ err }))
	}

	const onFileAdded = (e) => {
		setImageLink(e.target.files[0])
		// console.log(imageRef.current.files[0])
		// debugger
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				FileName:
				<input type="text" ref={nameRef} />
			</label>
			<br />
			<label>
				Image
				{/* <input type="file" onChange={onFileAdded} /> */}
				<input type="file" ref={imageRef} />
			</label>
			<input type="submit" value="ASFHJGHKSF" />
		</form>
	)
}

export default Form
