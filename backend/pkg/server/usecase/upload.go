package usecase

import (
	"backend/pkg/infra"
)

func Upload_S3(filepath string, filename string) (string, error) {
	client, err := infra.Init_s3()

	if err != nil {

		return "", err
	}

	s3, err := client.Upload_s3(filepath, filename)

	return s3.UploadOutput.Location, err
}
