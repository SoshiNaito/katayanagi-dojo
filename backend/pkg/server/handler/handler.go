package handler

import (
	"backend/pkg/infra"
	"backend/pkg/server/model"
	"backend/pkg/server/usecase"
	"fmt"

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

	var requestData Data
	c.BindJSON(&requestData)

	// uuidObj, _ := uuid.NewRandom()

	// content_id := uuidObj.String()
	fmt.Println("hogehoge", requestData)
	path, err := usecase.SaveImage(requestData.Post_image)
	fmt.Println("hoigehoge", path, err)
	c.JSON(200, "ok")
}

type Data struct {
	User_id    string `json:"User_id"`
	Location   string `json:"Location"`
	Title      string `json:"Title"`
	Post_image string `json:"Post_image"`
}
