import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Form from "./Form"

function App() {
	const [displayImage, setDisplayImage] = useState("")
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch("http://localhost:3000/api/posts")
			.then((r) => r.json())
			.then(setPosts)
		// .then(data => setPosts(data))
	}, [])

	return (
		<div className="App">
			{/* <img src={displayImage} alt="KAHSGFHKASFGHKJ" /> */}
			<Form setDisplayImage={setDisplayImage} setPosts={setPosts} />
			<>
				{posts.map((post) => {
					return (
						<div>
							<h1>{post.title}</h1>
							<p>{post.content}</p>
							<img src={post.image_url} alt={post.title} />
						</div>
					)
				})}
			</>
		</div>
	)
}

export default App
