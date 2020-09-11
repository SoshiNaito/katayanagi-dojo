import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';

function Post() {
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	const [image_url, setImageUrl] = useState("");

	const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

	useEffect(() => {
	})

	const handleImage = e => {
		const files = e.target.files
		const image_url = createObjectURL(files[0])
		setImageUrl(image_url)
	};

	return (
		<div className="post__wrap">
			<div className="post">
				{image_url
					? <div className="preview__wrap">< img src={image_url} className="preview" /></div>
					: <div className="preview__wrap--null"><div className="preview--null">+ select your image</div></div>
				}
				<input type="file" accept="image/*" onChange={handleImage} />
				<div className="post__field">
					<TextField id="standard-basic" label="title" />
					<TextField id="standard-basic" label="location" />
				</div>
			</div>
		</div>
	)
}

export default Post;
