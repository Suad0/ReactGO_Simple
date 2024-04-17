package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllGetriebe(c *gin.Context) {
	var getriebe []models.Getriebe
	initializers.DB.Unscoped().Find(&getriebe)
	c.JSON(http.StatusOK, gin.H{"getriebe": getriebe})
}
