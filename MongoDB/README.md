# MongoDB Installation on Node.js
[http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/](http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/)

`npm install mongodb --save`

## PATH

[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

`mongodb-osx-x86_64-4.0.6/bin/mongodump`
export PATH=<mongodb-install-directory>/bin:$PATH
`export PATH=mongodb-osx-x86_64-4.0.6/bin:$PATH`
YOU MAY HAVE DOWNLOADED IT TO ~/Downloads folder, in that case:
`export PATH=/Users/v738110/Downloads/mongodb-osx-x86_64-4.0.6/bin:$PATH`


## data directory

<!-- Create the data directory -->
`sudo mkdir -p /data/db`

### Give Read/Write access to current user to data directory
`sudo chmod -R 777 /data/db`

## Run MongoDB.¶
`mongod`
OR WHERE INSTALLED
`Downloads $ ./mongodb-osx-x86_64-4.0.6/bin/mongod`



## Test Running correctly
`2019-02-10T05:46:14.598-0600 I NETWORK  [initandlisten] waiting for connections on port 27017`


<!-- ## MongoDB Charts -->

## Connect from shell to MongoDB.¶
`mongo`
OR
`~/Downloads/mongodb-osx-x86_64-4.0.6/bin/mongo`

## Connect to Database = use

### The mongo Shell¶ https://docs.mongodb.com/manual/mongo/

```> db.liki.find()
> ;
> db.collection.find()
> db
test
> use liki
switched to db liki
> db.liki.find()
> db.liko.find().pretty()
> use local
switched to db local
> db.liki.find()
{ "_id" : ObjectId("5c601190af188cb358ccce1c"), "fname" : "David", "lname" : "Shams", "title" : "Solution Architect" }
>
```
## Connect to mongo from shell

`mongo`
`db`
`help`
Primary
Secodary
Arbiter
Arbiter - has no data on it
`> db.getMongo()`
`connection to 127.0.0.1:27017`
`priority: 10` <-- higher priority becomes primary >
`arbiterOnly: true`
`rs.initiate(configObject)`
`> db.test.save({_id:1, name:'David Shams'})`
`WriteResult({ "nMatched" : 0, "nUpserted" : 1, "nModified" : 0, "_id" : 1 })`
`mongo --port 40000` <-- connect to another instance of MongoDB>
`db.setSlaveOk()` <-- ok to read fom SECONDRY >
`db`
`db`
`db`
`db`
`db`