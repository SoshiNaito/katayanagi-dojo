import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

function Post() {
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [isRedirect, setIsRedirect] = useState(false);

	const [image, setImage] = useState("");

	const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

	const handleImage = e => {
		let image = ""
		const files = e.target.files
		if (files[0]) {
			image = createObjectURL(files[0])
		}
		setImage(image)
	}

	const handleTitle = e => {
		setTitle(e.target.value)
	}

	const handleLocation = e => {
		setLocation(e.target.value)
	}


	const [formData, setFormData] = useState({
		title: "",
		location: "",
		user_id: ""
	})


	const handlePost = () => {
		//postする処理で成功したらした
		console.log(image)
		console.log("hogehoge", sessionStorage.getitem)
		console.log(location)
		const encodedImage = btoa(image);
		console.log(encodedImage)
		//これ外せばhomeにリダイレクトする。
		// setIsRedirect(true)
		const hoge = {}
		axios.post(`${'http://localhost:3001/post'}`, hoge)

	}
	const fileInput = React.createRef()

	const handleSubmit = async (event) => {
		event.preventDefault()
		const submitData = new FormData()
		formData.location = location
		formData.title = title
		formData.user_id = sessionStorage.getItem('uid')


		submitData.append("formData", JSON.stringify(formData))
		submitData.append("image", fileInput.current.files[0])

		await axios.post(`${'http://localhost:3001/post'}`, submitData)
	}



	if (isRedirect === true) {
		return <Redirect to="/" />;
	}

	return (
		<div className="post__wrap">
			<div className="post">
				<input id="input-file" className="post__input" type="file" accept="image/*" onChange={handleImage} ref={fileInput} />
				<label for="input-file">
					{image
						? <div className="preview__wrap">< img src={image} className="preview" /></div>
						: <div className="preview__wrap--null"><p className="preview--null">+ select your image</p></div>
					}
				</label>
				<div className="post__field">
					<TextField label="title" onChange={handleTitle} />
					<TextField label="location" onChange={handleLocation} />
				</div>
				<div className="post__button">
					<Button onClick={handleSubmit} variant="outlined">post</Button>
				</div>
			</div>
		</div>
	)
}

export default Post;
