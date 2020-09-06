FROM golang:alpine

RUN apk add --no-cache git
RUN go get github.com/oxequa/realize


ENV CGO_ENABLED=0 \
  GOOS=linux \
  GOARCH=amd64 \
  GO111MODULE=on
EXPOSE 3001


CMD ["realize", "start", "--build","--run"]