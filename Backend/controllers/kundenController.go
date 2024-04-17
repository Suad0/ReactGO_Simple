package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllKunden(c *gin.Context) {
	var kunden []models.Kunde
	initializers.DB.Unscoped().Find(&kunden)
	c.JSON(http.StatusOK, gin.H{"kunden": kunden})
}
