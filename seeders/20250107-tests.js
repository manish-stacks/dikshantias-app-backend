
'use strict';
module.exports = { async up(q){ return q.bulkInsert("tests",[{
 id:1,title:"Polity Test 1",slug:"polity-test-1",displayOrder:1,testSeriesId:1,
 reattemptAllowed:true,type:"MOCK",resultGenerationTime:new.Date(),
 isDemo:false,duration:30,status:"active",startTime:new.Date(),endTime:new.Date(),
 solutionFileUrl:"solution.pdf",languages:"EN",subjectId: JSON.stringify([1]),
 noOfQuestions: JSON.stringify({"1":10}),passingPercentage:40,
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("tests",null,{}) } };
