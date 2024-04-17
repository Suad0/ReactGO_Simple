package models

import "gorm.io/gorm"

type Getriebe struct {
	gorm.Model

	GetriebeID int
	GangAnzahl int
	SchaltArt  string
}

func (Getriebe) TableName() string {
	return "getriebe"
}
