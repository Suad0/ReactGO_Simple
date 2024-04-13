package main

import (
	"auth_lwt_go/controllers"
	"auth_lwt_go/initializers"
	"auth_lwt_go/middleware"
	"fmt"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()
	initializers.SyncDatabase()
}

func main() {

	r := gin.Default()

	r.POST("/signup", controllers.SignUp)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.RequireAuth, controllers.Validate)

	r.Run()

	fmt.Println("Hallo 3")
}
