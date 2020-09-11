package handler

import (
	"backend/pkg/infra"
	"backend/pkg/server/model"

	"github.com/gin-gonic/gin"
)

func GetPost(c *gin.Context) {

	var data []model.Post

	client, _ := infra.Init_mysql()

	client.From("post").Scan(&data)
	defer client.Close()
	c.JSON(200, data)
}
