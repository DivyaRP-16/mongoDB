MongoDB Lab Assignments -Day 1
show dbs

use mongo_practice

INSERT DOCUMENTS

db.movies.insertMany([{title :' Pulp Fiction', writer :' Quentin Tarantino', year : 1994, actors : [' John Travolta','Uma Thurman' ]},{title :' Inglorious Basterds', writer :' Quentin Tarantino', year : 2009, actors : [ 'Brad Pitt','Diane Kruger','Eli Roth' ]},{title : 'The Hobbit An Unexpected Journey', writer : 'J.R.R. Tolkein', year : 2012, franchise : 'The Hobbit'},{title : 'The Hobbit An Unexpected Journey', writer :' J.R.R. Tolkein', year : 2012, franchise :' The Hobbit'},{title :'The Hobbit The Battle of the Five Armies', writer : 'J.R.R. Tolkein', year : 2012, franchise :'The Hobbit' ,synopsis :' Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.'},{title : 'Pee Wee Hermans Big Adventure'},{title :' Avatar'}])

show collections


FINDING

1. db.movies.find

2. db.movies.find({writer:' Quentin Tarantino'})

3. db.movies.find({actors:'Brad Pitt'})

4. db.movies.find({franchise:'The Hobbit'})

5. db.movies.find({year:{$lt:2000}})

6. db.movies.find({$or:[{year:{$lt:2000}},{year:{$gt:2000}}]})


UPDATE DOCUMENTS

1.db.movies.updateOne({title:'The Hobbit An Unexpected Journey'},{$set:{synopsis:'A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.'}})

2.db.movies.updateOne({title:'The Hobbit The Desolation of Smaug'},{$set:{synopsis:'The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.'}})

3.db.movies.updateOne({title:' Pulp Fiction'},{$set:{actors:'Samuel L. Jackson'}})

TEXT SEARCH

db.movies.createIndex({synopsis:"text"})

db.movies.find({$text:{$search:"Bilbo"}})

db.movies.find({$text:{$search:"Bilbo -Gandalf"}})

db.movies.find({$text:{$search:'/(\"dwarves\")|(hobbit)/'}})

db.movies.find({$text:{$search:'/(\"gold\")&(dragon)/'}})

DELETE

db.movies.deleteOne({title:'Pee Wee Hermans Big Adventure'})

db.movies.deleteOne({title:' Avatar'})

RELATIONSHIPS

USERS

use users

db.users.insertOne({username :' GoodGuyGreg', first_name : "Good Guy", last_name : "Greg", username : 'ScumbagSteve', full_name : [{first : "Scumbag"}, {last : "Steve"}]})

db.users.find()

POSTS

use posts

insertMany([{username :'GoodGuyGreg', title :'Passes out at party', body :'Wakes up early and cleans house'},{username : 'GoodGuyGreg', title : 'Steals your identity', body : 'Raises your credit score'},{username : 'GoodGuyGreg' ,title : 'Reports a bug in your code', body : 'Sends you a Pull Request'},{username : 'ScumbagSteve' ,title : 'Borrows something' ,body : 'Sells it'},{username : 'ScumbagSteve', title : 'Borrows everything', body : 'The end'},{username : 'ScumbagSteve' ,title : 'Forks your repo on github' ,body : 'Sets to private'}])db.posts.

db.posts.find()

COMMENTS
use comments

db.comments.insertMany([{username : 'GoodGuyGreg' ,comment : 'Hope you got a good deal!', post : ObjectId("6203da469f00f312ed4cb671")},{username : 'GoodGuyGreg' ,comment : 'What\'s mine is yours!', post : ObjectId("6203da469f00f312ed4cb672")},{username : 'GoodGuyGreg' ,comment : 'Don\'t violate the licensing agreement!' ,post : ObjectId("6203da469f00f312ed4cb673"")},{username : 'ScumbagSteve' ,comment : 'It still isn\'t clean' ,post : ObjectId("6203da469f00f312ed4cb674")},{username : 'ScumbagSteve' ,comment : 'Denied your PR cause I found a hack' ,post : ObjectId("6203da469f00f312ed4cb675")}])

Questions:

1.use users

2.db.users.find()

3.use posts

4.db.posts.find()

5.db.posts.createIndex({username:'text'})

6.db.posts.find({$text:{$search:'GoodGuyGreg'}})

7.db.posts.find({$text:{$search:'ScumbagSteve'}})

8.use comments

9.db.comments.find()

10.db.comments.createIndex({username:'text'})

11.db.comments.find({$text:{$search:'GoodGuyGreg'}})

12.db.comments.find({$text:{$search:'ScumbagSteve'}})

13.db.comments.find({post:ObjectId("6203da469f00f312ed4cb675")})
