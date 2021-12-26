# Create projectid var
PROJECTID=tkd-belt-client

deps:
	rm -rf $(PWD)/node_modules; npm i

deploy:
	ng build --configuration development
	rm -R nginx-hosting/dist; cp -R dist nginx-hosting
	cd nginx-hosting; gcloud builds submit --project $(PROJECTID)
	cd nginx-hosting; gcloud app deploy --image-url us.gcr.io/tkd-belt-client/angular-nginx-container --project $(PROJECTID)
