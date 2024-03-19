
//1
db.restaurant.find().pretty()


//2
db.restaurant.find({}{"restaurant_id": 1, "name": 1 , "borough" : 1, "cuisine": 1})

// 3
db.restaurant.find({}{"restaurant_id": 1, "name": 1 , "borough" : 1, "cuisine": 1, "_id": 0})]

// 4
db.restaurant.find({}{"restaurant_id": 1, "name": 1 , "borough" : 1, "address.zipcode": 1, "_id": 0})]


// 5
db.restaurant.find({"borough": "Bronx"}).limit(5)
//6
db.restaurant.find({"borough": "Bronx"}).limit(5)
// 7
db.restaurant.find({"borough": "Bronx"}).limit(5).skip(5)

//8
db.restaurant.find( {grades: {$elemMatch: {"score": {$gt: 90}}}})

// 9
db.restaurant.find( {grades: {$elemMatch: {"score": {$gt: 90 , $lt: 100}}}})

//10 
db.restaurant.find({"address.coord": {$lt: -95.754168}})
// 11
db.restaurant.find({$and:
    [ 
    {"cuisine": {$ne: "American"}}, 
    {"grades.score": {$gt: 70}}, 
    {"address.coord": {$lt: -65.754168}}
    ]
})

//12
db.restaurant.find({$and:
    [ 
    {"cuisine": {$ne: "American"}}, 
    {"grades.score": {$gt: 70}}, 
    {"address.coord": {$lt: -65.754168}}
    ]
})

// 13
db.restaurant.find({$and:
    [ 
    {"cuisine": {$ne: "American"}}, 
    {"grades.grade": "A"}, 
    {"borough": {$ne: "Brooklyn"}}
    ]
}).sort("cuisine": -1)
// 14
db.restaurant.find({"name": {$regex: /^Wil/}}{restaurant_id: 1, name: 1, borough:1, cuisine:1})
// 15
db.restaurant.find({"name": {$regex: /ces$/}}{restaurant_id: 1, name: 1, borough:1, cuisine:1})
// 16
db.restaurant.find({"name": {$regex: /Reg/i}}{restaurant_id: 1, name: 1, borough:1, cuisine:1})
// 17
db.restaurant.find({"borough": "Bronx", $or: [{cuisine: "American"}, {cuisine: "Chinese"}]})
//18
db.restaurant.find({"borough": {$in: ["Staten Island", "Queens", "Bronxor", "Brooklyn"]}}{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 19
db.restaurant.find({"borough": {$nin: ["Staten Island", "Queens", "Bronxor",  "Brooklyn"]}}{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 20
db.restaurant.find({"grades.score": {$not: {$gt: 10}}}{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 21
db.restaurant.find({$or: [{"cuisine": {$nin: ["American", "Chinese"]}}, {"name": {$regex: /^Wil/}}]}{restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 22
db.restaurant.find({$and: [{"grades.grade": "A"},{"grades.score": 11}, {"grades.date": ISODate("2014-08-11T00:00:00Z")}]}{restaurant_id: 1, name: 1, grades: 1})

// 23
db.restaurant.find({$and: [{"grades.grade": "A"},{"grades.score": 9}, {"grades.date": ISODate("2014-08-11T00:00:00Z")}]}{restaurant_id: 1, name: 1, grades: 1})

// 24
db.restaurant.find({"address.coord.1": {$gt: 42, $lte: 52}}{restaurant_id: 1, name: 1, grades: 1, "address.coord": 1})
// 25
db.restaurant.find().sort("name": 1)

// 26
db.restaurant.find().sort("name": -1)

// 27
db.restaurant.find().sort("cusine": 1, "borough": -1)

// 28
db.restaurant.find({"address.street": {$exists: true}})

// 29
db.restaurant.find({"address.coord": {$type: 1}})

// 30
db.restaurant.find({"grades.score" : {$mod: [7, 0]}}{"restaurand_id": 1, "name": 1, "grades": 1})

// 31
db.restaurant.find({"name": {$regex: /mon/i}}{"name" : 1, borough: 1, "address.coord": 1, cuisine: 1})

// 32
db.restaurant.find({"name": {$regex: /^Mad/}}{"name" : 1, borough: 1, "address.coord": 1, cuisine: 1})

// 33
db.restaurant.find({"grades": {"$elemMatch": {"score": {$lt: 5}}}})
// 34
db.restaurant.find({"grades": {"$elemMatch": {"score": {$lt: 5}}}, "borough": "Manhattan"})

// 35
db.restaurant.find({"grades": {"$elemMatch": {"score": {$lt: 5}}}, "borough": {$in: ["Manhattan", "Brooklyn"]} })

// 36
db.restaurant.find({"grades": {"$elemMatch": {"score": {$lt: 5}}}, "borough": {$in: ["Manhattan", "Brooklyn"]}, "cuisine": {$ne: "American"}})

// 37
db.restaurant.find({"grades": {"$elemMatch": {"score": {$lt: 5}}}, "borough": {$in: ["Manhattan", "Brooklyn"]}, "cuisine": {$ne: {$in: ["American", "Chinese"]}})

// 38
db.restaurant.find({$and: [{"grades.score": {$eq: 2}}, {"grades.score": {$eq: 6}]})
// 39
db.restaurant.find({$and: [{"grades.score": {$eq: 2}}, {"grades.score": {$eq: 6}}, {"borough": "Manhattan"}]})
// 40
db.restaurant.find({$and: [{"grades.score": {$eq: 2}}, {"grades.score": {$eq: 6}}, {"borough": {$in: ["Manhattan", "Brooklyn"]}}]})

// 41
db.restaurant.find({$and: [{"grades.score": {$eq: 2}}, {"grades.score": {$eq: 6}}, {"borough": {$in: ["Manhattan", "Brooklyn"]}}, {"cuisine": {$ne: "American"}}]})

// 42
db.restaurant.find({$and: [{"grades.score": {$eq: 2}}, {"grades.score": {$eq: 6}}, {"borough": {$in: ["Manhattan", "Brooklyn"]}}, {"cuisine": {$ne: {$in: ["American", "Chinese"]}}}]})

// 43
db.restaurant.find({"grades.score": {$in: [2, 6]}})

// 44
db.restaurant.find({"grades.score": {$in: [2, 6]}, "borough": {$in: ["Manhattan"]})

// 45
db.restaurant.find({"grades.score": {$in: [2, 6]}, "borough": {$in: ["Manhattan", "Brooklyn"]}})

// 46
db.restaurant.find({"grades.score": {$in: [2, 6]}, "borough": {$in: ["Manhattan", "Brooklyn"]}, "cuisine": {$ne: {$in: ["American"]}}})

// 47
db.restaurant.find({"grades.score": {$in: [2, 6]}, "borough": {$in: ["Manhattan", "Brooklyn"]}, "cuisine": {$ne: {$in: ["American", "Chinese"]}}})

// 48
db.restaurant.find({"grades": {
    $not: {
        $elemMatch: {
            "score": {
                $lte: 5
            }
        }
    }
}
})

// 49
db.restaurant.find({"grades": {
    $not: {
        $elemMatch: {
            "score": {
                $lte: 5
            }
        }
    }
},
    "borough":{
        $in: ["Manhattan"]
    }
})

// 50
db.restaurant.find({"grades": {
    $not: {
        $elemMatch: {
            "score": {
                $lte: 5
            }
        }
    }
},
    "borough":{
        $in: ["Manhattan", "Brooklyn"]
    }
})

// 51
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$name", avgScore: {$avg: "$grades.score"} }}])
// 52
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$name", HighScore: {$max: "$grades.score"} }}])
// 53
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$name", LowScore: {$min: "$grades.score"} }}])
// 54
db.restaurant.aggregate({$group: { _id: "$borough", count:{$sum : 1}}})
// 55
db.restaurant.aggregate({$group: { _id:  "$cuisine", count:{$sum : 1}}})

// 56
db.restaurant.aggregate({$group: { _id: {borough: "$borough", cuisine: "$cuisine"}, count:{$sum : 1}}})

//57 
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "A"}}{$group: { _id:  "$cuisine", count:{$sum: 1}}}])

// 58
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "A"}}{$group: { _id:  "$borough", count:{$sum: 1}}}])

// 59
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "A"}}{$group: { _id:  {cuisine: "$cuisine", borough:"$borough"}, count:{$sum: 1}}}])

// 60
db.restaurant.aggregate(
    [
        {$unwind: "$grades"}, 
        {$project:  
            {month: {$month: {$toDate: "$grades.date"}}, 
            year: {$year: {$toDate:"$grades.date"}}}},
        {$group: { _id: {month : "$month", year: "$year"}, count: {$sum: 1}}},
        { $sort: {"_id.month":  1, "_id.year": 1}}
])
// 61
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$cuisine", avgScore: {$avg:"$grades.score"}}}])
// 62
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$cuisine", HighScore: {$max: "$grades.score"} }}])
// 63
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$cuisine", LowScore: {$min: "$grades.score"} }}])
// 64
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$borough", avgScore: {$avg: "$grades.score"} }}])
// 65
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$borough", HighScore: {$max: "$grades.score"} }}])
// 66
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$borough", LowScore: {$min: "$grades.score"} }}])

// 67
db.restaurant.find([{"grades": {$elemMatch: {"date": {$eq: ISODate("2014-09-06T00:00:00.000Z")}, "grade": {$in: ["A"]}}}]{name: 1, address:1})

// 68
db.restaurant.find([{"grades": {$elemMatch: {"date": {$eq: ISODate("2014-09-06T00:00:00.000Z")}, "grade": {$in: ["B", "C"]}}}]{name: 1, address:1})
//69
db.restaurant.find([{"grades": {$elemMatch:{"grade": {$eq: ["A"]}, "grade": {$eq: "B"}}}}]{name: 1, address:1})
//70
db.restaurant.find({"grades.grade":"A", "grades.grade": {$ne: "B"}}{name: 1, address:1})
// 71
db.restaurant.find({"grades.grade":"A", "grades.grade": {$ne: "C"}}{name: 1, address:1, grades: 1})
// 72
db.restaurant.find({$and: [{"grades.grade": "A"}, {"grades.grade": {$not: {$eq: "B"}}}, {"grades.grade": {$not: {$eq: "C"}}}}{name: 1, address:1, grades: 1})
// 73
db.restaurant.find({"name": {$regex: /coffee/i}}{name:1, address: 1})
// 74
db.restaurant.find({"address.zipcode": {$regex: /^10/}}{name: 1, address:1})
// 75
db.restaurant.find({"cuisine": {$regex: /^B/}}{name: 1, address:1})
// 76
db.restaurant.find({"cuisine": {$regex: /y$/}}{name: 1, address:1, cuisine: 1})
// 77
db.restaurant.find({"cuisine": {$regex: /Pizza/i}}{name: 1, address:1, cuisine: 1})
// 78
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$restaurant_id", avgScore: {$avg: "$grades.score"}}}, {$sort: {avgScore: -1}}, {$limit: 1}])
// 79
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "A"}}{$group: { _id: "$restaurant_id", numOfA: {$sum : 1}}}, {$sort: {numOfA: -1}}, {$limit: 1}])
// 80
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "C"}}{$group: { _id: "$cuisine", numOfC: {$sum : 1}}}, {$sort: {numOfA: -1}}, {$limit: 1}])
// 81
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"cuisine": "Turkish"}}{$group: { _id: "$name", avgScore: {$sum : 1}}}, {$sort: {avgScore: -1}}, {$limit: 1}])
// 82
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: "$name", TotalScore: {$sum: "$grades.score"}}}, {$sort: {TotalScore: -1}}, {$limit: 1}])
// 83
db.restaurant.find({"cuisine": "Chinese", "borough": "Brooklyn"})
// 84
db.restaurant.find({}).sort("grades.date": -1).limit(1);
// 85
db.restaurant.aggregate([{$unwind: "$grades"}, {$group: { _id: {cuisine: "$cuisine", restaurant_id: "$restaurant_id"}, avgScore: {$avg: "$grades.score"}}}, {$sort: {avgScore: -1}},
{$group: { _id: "$_id.cuisine", Restaurant: {$push: {restaurant_id: "$_id.restaurant_id", newavgScore: {$avg: "$avgScore"}}}}}, {$project: {cuisine: "$_id", Restaurant: {$slice:["$Restaurant", 5]}}}])
// 86
db.restaurant.aggregate([{$unwind: "$grades"}, {$match: {"grades.grade": "A"}}, {$group: { _id: {borough: "$borough", restaurant_id: "$restaurant_id" }, numOfA: {$sum : 1}}}, {$sort: {numOfA: -1}}, 
{$group: { _id: "$_id.borough", Restaurant: {$push:{restaurant_id: "$_id.restaurant_id", NumOfA:{$sum: "$numOfA"}}}}}, 
{$project: {borough: "$_id", Restaurant: {$slice: ["$Restaurant", 5]}}}
])
// 87
db.restaurant.aggregate([{$match: {"grades.grade": "A", "grades.score": {$gte: 90}}}, 
{$group: { _id: "$borough", count: {$sum : 1}}}, {$sort: {"borough": -1}}, {$limit: 1}
])
