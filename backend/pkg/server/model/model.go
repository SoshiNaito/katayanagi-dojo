package model

type Post struct {
	Post_id   string `json:"Post_id"`
	User_id   string `json:"User_id"`
	Location  string `json:"Location"`
	Title     string `json:"Title"`
	Create_at string `json:"Create_at"`
	Post_url  string `json:"Post_url"`
}
