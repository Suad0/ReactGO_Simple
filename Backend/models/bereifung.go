package models

import "gorm.io/gorm"

type Bereifung struct {
	gorm.Model

	BereifungID       int
	ReifenHersteller  string
	ReifenModell      string
	FelgenHersteller  string
	FelgenModell      string
	FelgenMaterial    string
	ReifenDimensionen string
}

func (Bereifung) TableName() string {
	return "bereifung"
}
