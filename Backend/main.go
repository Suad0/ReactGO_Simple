package main

import (
	"auth_lwt_go/controllers"
	"auth_lwt_go/initializers"
	"auth_lwt_go/middleware"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDb()

	initializers.ConnectToAutohausDb()

	initializers.SyncDatabase()
}

func main() {

	r := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // Allow requests from localhost:3000
	r.Use(cors.New(config))

	r.POST("/signup", controllers.SignUp)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.RequireAuth, controllers.Validate)

	r.GET("/kunden", controllers.GetAllKunden)
	r.GET("/motor", controllers.GetAllMotor)
	r.GET("/getriebe", controllers.GetAllGetriebe)
	r.GET("/bereifung", controllers.GetAllBereifung)
	r.GET("/interieur", controllers.GetAllInterieur)
	r.GET("/karosserie", controllers.GetAllKarosserie)
	r.GET("/auto", controllers.GetAllAuto)
	r.GET("/motorrad", controllers.GetAllMotorrad)

	r.Run()

	fmt.Println("Hallo 3")
}
