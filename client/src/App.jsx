import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Form from "./Form"

function App() {
	const [displayImage, setDisplayImage] = useState("")

	return (
		<div className="App">
			<img src={displayImage} alt="KAHSGFHKASFGHKJ" />
			<Form setDisplayImage={setDisplayImage} />
		</div>
	)
}

export default App
