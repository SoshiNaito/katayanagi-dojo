package create_sample

import (
	"backend/pkg/infra"
	"backend/pkg/server/model"
	"backend/pkg/server/usecase"
)

type SampleData struct {
}

func Create_sample() {
	var data model.Post
	data.Post_url, _ = usecase.Upload_S3("/app/db/create_sample/image.jpg", "hoge.jpg")
	data.Title = "hoge"
	data.Location = "hoge"
	client, _ := infra.Init_mysql()

	client.From("post").Create(&data)
	// fmt.Println(hoge)
}
