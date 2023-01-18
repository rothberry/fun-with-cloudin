import { useState, useRef } from "react"

const Form = ({ setDisplayImage, setPosts }) => {
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

	const titleRef = useRef()
	const contentRef = useRef()
	const imageRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log({
		// 	titleRef: titleRef.current.value,
		// 	imageRef: imageRef.current.files[0],
		// })
		let imageData = new FormData()
		imageData.append("title", titleRef.current.value)
		imageData.append("content", contentRef.current.value)
		imageData.append("imageFile", imageRef.current.files[0])
		// console.log(imageData)
		const postReqObj = {
			method: "POST",
			headers: {
				Accepts: "application/json",
			},
			body: imageData,
		}
		fetch("http://localhost:3000/api/posts", postReqObj)
			.then((r) => r.json())
			.then((data) => {
				console.log(data)
				setPosts((prev) => [data, ...prev])
				// setDisplayImage(data.imageUrl)
			})
			.catch((err) => console.error({ err }))
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input type="text" ref={titleRef} />
			</label>
			<label>
				Content:
				<textarea type="textarea" ref={contentRef} />
			</label>
			<label>
				Image:
				<input type="file" ref={imageRef} />
			</label>
			<input type="submit" value="UPLOAD IMAGE" />
		</form>
	)
}

export default Form
