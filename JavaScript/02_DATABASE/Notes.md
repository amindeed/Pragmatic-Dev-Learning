# 02_DATABASE
## Configure MongoDB

- **First time run :**

After starting the MongoDB service :
```
mongo --port 27017
```

```
use admin
db.createUser(
   {
     user: "myUserAdmin",
     pwd: passwordPrompt(),
     roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
   }
 )
```

```
# Update: "C:\Program Files\MongoDB\Server\4.4\bin\mongod.cfg"
# Uncomment "#security" and add "authorization: enabled"
security:
  authorization: enabled
```

- `exit` Mongo shell and restart the service (`mongod`), then :

```
mongo --port 27017
```

```
use admin
db.auth( "myUserAdmin", passwordPrompt() )
```

```
db.createUser(
   {
     user: "amindeed",
     pwd:  passwordPrompt(),
     roles: [ { role: "readWrite", db: "learn_dev" } ]
   }
 )
```

```
use learn_dev
db.auth( "amindeed", passwordPrompt() )
```

Check that the desired user is connected :

```
db.runCommand({connectionStatus : 1})
```

Create a new collection under the `learn_dev` database :

```
db.createCollection("learn_dev_collection")
```

Or, with schema validation :

```
db.createCollection("learn_dev_collection", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "first_name", "last_name", "email", "gender", "ip_address" ],
         properties: {
            first_name: {
               bsonType: "string",
            },
			last_name: {
               bsonType: "string",
            },
			email: {
               bsonType: "string",
            },
			gender: {
               bsonType: "string",
            },
			ip_address: {
               bsonType: "string",
            }
         }
      }
   }
})
```

Then insert/import documents (records) into the collection :
```
db.learn_dev_collection.insert([
    {"first_name":"Kalil","last_name":"Reichert","email":"kreichert0@usgs.gov","gender":"Male","ip_address":"125.129.118.129"},
    {"first_name":"Kendell","last_name":"Sanney","email":"ksanney1@blogs.com","gender":"Male","ip_address":"21.213.39.242"},
    {"first_name":"Kym","last_name":"Fretter","email":"kfretter2@squidoo.com","gender":"Female","ip_address":"35.6.179.99"},
    {"first_name":"Gaylene","last_name":"Fieldsend","email":"gfieldsend3@opensource.org","gender":"Female","ip_address":"172.142.204.23"},
    {"first_name":"Sib","last_name":"Phillpotts","email":"sphillpotts4@washington.edu","gender":"Female","ip_address":"100.56.2.29"}
])
```

### Resources

* [Enable Access Control — MongoDB Manual](https://docs.mongodb.com/master/tutorial/enable-authentication/)
* [authenticate — MongoDB Manual](https://docs.mongodb.com/manual/reference/command/authenticate/#dbcmd.authenticate)
* [db.changeUserPassword() — MongoDB Manual](https://docs.mongodb.com/manual/reference/method/db.changeUserPassword/)
* [Schema Validation — MongoDB Manual](https://docs.mongodb.com/manual/core/schema-validation/)
* [Insert Documents — MongoDB Manual](https://docs.mongodb.com/manual/tutorial/insert-documents/)
* [MongoDB CRUD Operations — MongoDB Manual](https://docs.mongodb.com/manual/crud/)
* [MongoDB and Node.js Tutorial - CRUD Operations](https://developer.mongodb.com/quickstart/node-crud-tutorial)
