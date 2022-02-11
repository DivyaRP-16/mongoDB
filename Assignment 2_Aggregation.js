db.zipcodes.find({city:"ATLANTA", state: "GA"})
db.zipcodes.aggregate([{$match: {city:"ATLANTA", state: "GA"}}])
db.zipcodes.aggregate([{$match:{city:"ATLANTA"}},{$group:{_id:"$city", count:{$sum: 1}}}])
db.zipcodes.aggregate([{$match:{city:"ATLANTA"}},{$group:{_id:"$city", count:{$sum:"$pop"}}}])

db.zipcodes.aggregate([{$group:{_id:"$state", TotPopulation:{$sum:"$pop"}}}])
db.zipcodes.aggregate([{$group:{_id:"$state", TotPopulation:{$sum:"$pop"}}}, {$sort:{TotPopulation:-1}}])
db.zipcodes.aggregate([{$group:{_id:"$state", TotPopulation:{$sum:"$pop"}}}, {$sort:{TotPopulation:-1}}, {$limit: 3}])

db.zipcodes.aggregate([{$group:{_id:"$city", TotPopulation:{$sum:"$pop"}}}])
db.zipcodes.aggregate([{$group:{_id:"$city", TotPopulation:{$sum:"$pop"}}}, {$sort:{TotPopulation:-1}}])
db.zipcodes.aggregate([{$group:{_id:"$city", TotPopulation:{$sum:"$pop"}}}, {$sort:{TotPopulation:-1}}, {$limit: 3}])
db.zipcodes.aggregate([{$match:{state:"TX"}},{$group:{_id:"$city", TotPopulation:{$sum:"$pop"}}}, {$sort:{TotPopulation:-1}}, {$limit: 3}])
    1)Houston  2)Dallas  3)San Antonio

db.zipcodes.aggregate([{$group:{_id:"$state", AvgPopulation:{$avg:"$pop"}}}])
db.zipcodes.aggregate([{$group:{_id:"$state", AvgPopulation:{$avg:"$pop"}}}, {$sort:{AvgPopulation:-1}}, {$limit: 3}])
    1)DC   2)CA   3)FL