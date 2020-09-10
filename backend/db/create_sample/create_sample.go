package create_sample

import (
	"backend/pkg/server/usecase"
	"fmt"
)

type SampleData struct {
}

func Create_sample() {
	hoge, _ := usecase.Upload_S3("/app/db/create_sample/image.jpg", "hoge.jpg")
	fmt.Println(hoge)
}
