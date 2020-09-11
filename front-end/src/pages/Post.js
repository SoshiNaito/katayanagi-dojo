import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom'


function Post() {
	const [title, setTitle] = useState("");
	const [location, setLocation] = useState("");
	const [isRedirect, setIsRedirect] = useState(false);

	const [image_url, setImageUrl] = useState("");

	const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

	const handleImage = e => {
		let image_url = ""
		const files = e.target.files
		if (files[0]) {
			image_url = createObjectURL(files[0])
		}
		setImageUrl(image_url)
	}

	const handleTitle = e => {
		setTitle(e.target.value)
	}

	const handleLocation = e => {
		setLocation(e.target.value)
	}

	const handlePost = () => {
		//postする処理で成功したらした
		setIsRedirect(true)
	}

	if (isRedirect === true) {
		return <Redirect to="/" />;
	}

	return (
		<div className="post__wrap">
			<div className="post">
				<input id="input-file" className="post__input" type="file" accept="image/*" onChange={handleImage} />
				<label for="input-file">
					{image_url
						? <div className="preview__wrap">< img src={image_url} className="preview" /></div>
						: <div className="preview__wrap--null"><p className="preview--null">+ select your image</p></div>
					}
				</label>
				<div className="post__field">
					<TextField id="standard-basic test" label="title" onChange={handleTitle} />
					<TextField id="standard-basic" label="location" onChange={handleLocation} />
				</div>
				<div className="post__button">
					<Button onClick={handlePost} variant="outlined">post</Button>
				</div>
			</div>
		</div>
	)
}

export default Post;
