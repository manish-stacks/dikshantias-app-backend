
'use strict';
module.exports = { async up(q){ return q.bulkInsert("scholarshipmcqquestions",[{
 id:1,question:"What is 2+2?",options:JSON.stringify(["1","2","3","4"]),
 correctOption:JSON.stringify(["4"]),positiveMarks:1,negativeMark:0.25,
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("scholarshipmcqquestions",null,{}) } };
