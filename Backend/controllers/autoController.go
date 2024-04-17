package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllAuto(c *gin.Context) {
	var auto []models.Auto
	initializers.DB.Unscoped().Find(&auto)
	c.JSON(http.StatusOK, gin.H{"auto": auto})
}
