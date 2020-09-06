FROM golang:alpine

COPY ./ /go/src/api

WORKDIR /go/src/api

COPY go.mod .
COPY go.sum .

RUN apk add --no-cache git && \
  go get gopkg.in/urfave/cli.v2@master && \
  go get github.com/oxequa/realize

RUN go mod download
