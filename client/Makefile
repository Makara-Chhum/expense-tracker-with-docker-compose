build-dev:
	docker build -t react-app .

build-local:
	docker build \
	-t react-app-production:local \
	--build-arg CADDYFILES=Caddyfile.local \
	--build-arg BASE_URL=http://localhost:5000/api \
	-f Dockerfile.production .

build-production: 
	docker build \
	-t react-app-production:production \
	--build-arg CADDYFILES=Caddyfile.production \
	--build-arg BASE_URL=http://localhost:5000/api \
	-f Dockerfile.production .




