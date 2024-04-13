package initializers

import (
	"auth_lwt_go/models"
)

func SyncDatabase() {
	DB.AutoMigrate(&models.User{})

}
