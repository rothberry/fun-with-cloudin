import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Form from "./Form"
import MyImage from "./MyImage"

function App() {
	const [count, setCount] = useState(0)
	const [image, setImage] = useState("")

	return (
		<div className="App">
			<Form setImage={setImage} />
			<MyImage image={image} />
		</div>
	)
}

export default App
