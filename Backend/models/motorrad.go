package models

import "gorm.io/gorm"

type Motorrad struct {
	gorm.Model

	MotorID     uint
	GetriebeID  uint
	BereifungID uint
	Hersteller  string
	Modell      string
	Tankvolumen int
	Sitzhoehe   float64
	VMax        int
	KmStand     int
	Gebraucht   bool
	Verleihen   bool
	Preis       float64
	Gewicht     int
	Bauform     string
}

func (Motorrad) TableName() string {
	return "motorrad"
}
