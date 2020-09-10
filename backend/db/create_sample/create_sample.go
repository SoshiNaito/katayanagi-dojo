package create_sample

import (
	"backend/pkg/server/usecase"
)

type SampleData struct {
}

func Create_sample() {
	_, _ = usecase.Upload_S3("/app/db/create_sample/image.jpg", "hoge.jpg")
}
