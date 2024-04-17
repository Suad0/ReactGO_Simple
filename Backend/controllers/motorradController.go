package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllMotorrad(c *gin.Context) {
	var motorrad []models.Motorrad
	initializers.DB.Unscoped().Find(&motorrad)
	c.JSON(http.StatusOK, gin.H{"motorrad": motorrad})
}
