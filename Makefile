build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev:
	ENV=dev docker compose -f docker-compose-dev.yaml up

stop-dev:
	ENV=dev docker compose -f docker-compose-dev.yaml down

################################

build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build

run-local:
	ENV=local docker compose -f docker-compose-production.yaml up

stop-local:
	ENV=local docker compose -f docker-compose-production.yaml down


################################

build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

run-production:
	ENV=production docker compose -f docker-compose-production.yaml up 

stop-production:
	ENV=production docker compose -f docker-compose-production.yaml down

SSH_STRING=root@public_ip

ssh:
	ssh ${SSH_STRING}

conpy-files:
	scp -r  ./*	${SSH_STRING}:/root/