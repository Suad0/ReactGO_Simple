package models

import "gorm.io/gorm"

type Karosserie struct {
	gorm.Model

	Bauform  string
	Material string
	Farbe    string
}

func (Karosserie) TableName() string {
	return "karosserie"
}
