package server

import (
	"backend/pkg/server/handler"

	"github.com/gin-gonic/gin"
)

func Server(r *gin.Engine, port string) {

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ping",
		})
	})
	r.GET("/getPost", handler.GetPost)

	r.Run(port)
}
