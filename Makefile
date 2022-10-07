build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev:
	docker compose up --detach -f docker-compose-dev.yaml