package server

import (
	"github.com/gin-gonic/gin"
)

func Server(r *gin.Engine, port string) {

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ping",
		})
	})

	r.GET("/sign-in", func(c *gin.Context) {
		// var user model.User
		// 	user.Name = "aaaa"
		// 	fmt.Printf(user)
		// 	// if err := c.ShouldBindJSON(&json); err != nil {
		// 	// 	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		// 	// 	return
		// 	// }
	})
	r.Run(port)
}
