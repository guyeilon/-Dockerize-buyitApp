build-dev:
	cd client && $(MAKE) build-dev
	cd server && $(MAKE) build

run-dev:
	docker-compose -f docker-compose-dev.yml up

###

build-local:
	cd client && $(MAKE) build-local
	cd server && $(MAKE) build

run-local:
	 docker-compose -f docker-compose-production.yml up


###

build-production:
	cd client && $(MAKE) build-production
	cd server && $(MAKE) build

run-production:
	 docker-compose -f docker-compose-production.yml  up

SSH_STRING:=root@198.199.66.170

ssh:
	ssh $(SSH_STRING) 

copy-files:
	scp -r ./* $(SSH_STRING):/root/



