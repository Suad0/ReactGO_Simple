package models

import "gorm.io/gorm"

type Motor struct {
	gorm.Model

	MotorID        int
	Hubraum        float32
	ZylinderAnzahl int
	Bauform        string
	Kraftstoff     string
	Ansaugung      string
	Kuehlung       string
	Drehmoment     int
	Leistung       int
	MaxDrehzahl    int
}

func (Motor) TableName() string {
	return "motor"
}
