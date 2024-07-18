## if mongo db is not working then use this command 
sudo systemctl start mongod
## then check is working or not 
sudo systemctl status mongod

## some it is not working in localhost the use 127.0.0.1 instead of localhost like 
connection: "mongodb://127.0.0.1:27017/showcase"