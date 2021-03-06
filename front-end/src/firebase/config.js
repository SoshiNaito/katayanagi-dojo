require('dotenv').config()
const {
	REACT_APP_FB_API_KEY,
	REACT_APP_FB_AUTH_DOMAIN,
	REACT_APP_FB_DATABASE_URL,
	REACT_APP_FB_PROJECT_ID,
	REACT_APP_FB_STORAGE_BUCKET,
	REACT_APP_FB_MESSAGEING_SENDER_ID
} = process.env

export const firebaseConfig = {
	apiKey: REACT_APP_FB_API_KEY,
	authDomain: REACT_APP_FB_AUTH_DOMAIN,
	databaseURL: REACT_APP_FB_DATABASE_URL,
	projectId: REACT_APP_FB_PROJECT_ID,
	storageBucket: REACT_APP_FB_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_FB_MESSAGEING_SENDER_ID
};
