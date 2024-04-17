package models

import "gorm.io/gorm"

type Kunde struct {
	gorm.Model

	KundeID int
	Name    string
	Telefon string
	Email   string
}

func (Kunde) TableName() string {
	return "kunde"
}
