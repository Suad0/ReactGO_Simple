package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllMotor(c *gin.Context) {
	var motor []models.Motor
	initializers.DB.Unscoped().Find(&motor)
	c.JSON(http.StatusOK, gin.H{"motor": motor})
}
