package server

import "github.com/gin-gonic/gin"

func Server(r *gin.Engine, port string) {

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ping",
		})
	})
	r.Run(port)
}
