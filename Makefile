build:
	docker-compose -f docker-compose.yml  build
up:
	docker-compose -f docker-compose.yml up -d
	@sleep 10
	-docker-compose exec backend bash  -c "sql-migrate up"

down:
	docker-compose -f docker-compose.yml  down

init/mysql:
	docker-compose exec backend bash -c "sql-migrate up"
	docker-compose exec backend bash -c "go run cmd/createsample.go"
