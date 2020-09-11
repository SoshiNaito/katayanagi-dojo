package model

type Post struct {
	User_id   string `json:"User_id"`
	Location  string `json:"Location"`
	Title     string `json:"Title"`
	Create_at string `json:"Create_at"`
	Post_url  string `json:"Post_url"`
}
