package handler

import (
	"backend/pkg/infra"
	"backend/pkg/server/model"
	"backend/pkg/server/usecase"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"time"

	"github.com/gin-gonic/gin"
)

func GetPost(c *gin.Context) {

	var data []model.Post

	client, _ := infra.Init_mysql()

	client.From("post").Scan(&data)
	defer client.Close()
	c.JSON(200, data)
}

func PostContent(c *gin.Context) {

	// var requestData Data
	var data model.Post

	jsonStr := c.Request.FormValue("formData")
	var p Data
	fmt.Println("hugahugaaaaaaaa", jsonStr)
	json.Unmarshal([]byte(jsonStr), &p)

	image, header, _ := c.Request.FormFile("image")

	tmpFile, _ := os.Create("./tmp/" + header.Filename)

	defer os.Remove(tmpFile.Name())
	defer tmpFile.Close()
	io.Copy(tmpFile, image)

	path, err := usecase.SaveImage(tmpFile.Name())
	fmt.Println("hoigehoge", path, err)
	data.User_id = p.User_id
	data.Location = p.Location
	data.Post_url = path
	data.Title = p.Title

	data.Post_id = usecase.Uuid4()
	day := time.Now()
	const layout = "2006-01-02"

	data.Create_at = day.Format(layout)

	client, _ := infra.Init_mysql()

	client.From("content_data").Create(&data)
	c.JSON(200, "ok")
}

func MyPost(c *gin.Context) {

	var data []model.Post
	var requestData Data
	c.BindJSON(&requestData)

	client, _ := infra.Init_mysql()

	client.From("post").Where("user_id = ?", requestData.User_id).Scan(&data)
	defer client.Close()
	c.JSON(200, data)
}

type Data struct {
	User_id    string `json:"user_id"`
	Location   string `json:"location"`
	Title      string `json:"title"`
	Post_image string `json:"post_image"`
}
