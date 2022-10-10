**Part 1: Dokerize** 
1) Run baseline application
2) Dockerize api server
3) Dockerize react server 
4) Set up docker-compose
5) Find public mongo image
6) Enable hot reloading by mounting in src 

**Part 2: Productionize** 
1) Break out seperate docker compose files (dev, produtional)
2) Move DB to Atlas
3) Update client Dockerfile to build production version
4) Use Caddy to serve front end files 
5) Parameterize connection string
6) Split local and production configuration in

**Part 3: Deployment**   
1) Create Digital Ocean VM 
2) Configure DNS
3) Configure network access in Atlas
4) Configure Caddy
5) Deploy!
