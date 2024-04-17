package controllers

import (
	"auth_lwt_go/initializers"
	"auth_lwt_go/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllBereifung(c *gin.Context) {
	var bereifung []models.Bereifung
	initializers.DB.Unscoped().Find(&bereifung)
	c.JSON(http.StatusOK, gin.H{"bereifung": bereifung})
}
