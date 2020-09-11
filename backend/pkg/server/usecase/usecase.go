package usecase

import (
	"backend/pkg/infra"
	"fmt"
	"image"
	"os"

	"github.com/google/uuid"
)

func Upload_S3(filepath string, filename string) (string, error) {
	client, err := infra.Init_s3()

	if err != nil {

		return "", err
	}

	s3, err := client.Upload_s3(filepath, filename)

	return s3.UploadOutput.Location, err
}

func SaveImage(filepath string) (string, error) {

	format, err := AnalyzeFormat(filepath)
	if err != nil {
		return "", err
	}

	if format == "jpeg" {
		result_path, err := Upload_S3(filepath, fmt.Sprintf("%s.jpg", Uuid4()))
		return result_path, err
	} else if format == "png" {
		result_path, err := Upload_S3(filepath, fmt.Sprintf("%s.png", Uuid4()))
		return result_path, err
	}

	return "", nil
}
func AnalyzeFormat(fileName string) (string, error) {
	file, err := os.Open(fileName)
	if err != nil {
		return "", err
	}
	defer file.Close()

	_, format, err := image.DecodeConfig(file)
	if err != nil {
		return "", err
	}
	return format, err

}
func Uuid4() string {
	uuidObj, _ := uuid.NewRandom()
	return uuidObj.String()
}
