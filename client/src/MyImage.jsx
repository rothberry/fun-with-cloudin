import React from "react"

const MyImage = ({ image: { url, width, height } }) => {
	return <img src={url} alt="ohNo!" height={height} width={width} />
}

export default MyImage
