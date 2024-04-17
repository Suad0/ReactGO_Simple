package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllInterieur(c *gin.Context) {
	var interieur []models.Interieur
	initializers.DB.Unscoped().Find(&interieur)
	c.JSON(http.StatusOK, gin.H{"interieur": interieur})
}
