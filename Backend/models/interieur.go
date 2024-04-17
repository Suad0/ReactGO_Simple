package models

import "gorm.io/gorm"

type Interieur struct {
	gorm.Model

	InterieurID     int
	SitzAnzahl      int
	SitzMaterial    string
	SitzArt         string
	Sitzheizung     bool
	Massagesitze    bool
	BeluefteteSitze bool
	LenkradMaterial string
}

func (Interieur) TableName() string {
	return "interieur"
}
