
'use strict';
module.exports = { async up(q){ return q.bulkInsert("mcqquestions",[{
 id:1,questiontype:"Single",positiveMarks:1,negativeMark:0.25,
 question:"Who is the Father of Indian Constitution?",
 subjectId:1,options:JSON.stringify(["Ambedkar","Gandhi","Nehru","Patel"]),
 correctOption:JSON.stringify(["Ambedkar"]),
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("mcqquestions",null,{}) } };
