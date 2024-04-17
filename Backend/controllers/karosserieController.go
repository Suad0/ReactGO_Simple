package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllKarosserie(c *gin.Context) {
	var karosserie []models.Karosserie
	initializers.DB.Unscoped().Find(&karosserie)
	c.JSON(http.StatusOK, gin.H{"karosserie": karosserie})
}
