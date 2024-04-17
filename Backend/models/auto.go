package models

import "gorm.io/gorm"

type Auto struct {
	gorm.Model

	MotorID      uint
	GetriebeID   uint
	BereifungID  uint
	InterieurID  uint
	KarosserieID uint
	Hersteller   string
	Modell       string
	Gebraucht    bool
	KmStand      int
	Verleihen    bool
	Preis        float64
	Tankvolumen  int
	VMax         int
	Gewicht      int
}

func (Auto) TableName() string {
	return "auto"
}
