
'use strict';
module.exports = { async up(q){ return q.bulkInsert("scholarships",[{
 id:1,name:"National Scholarship",description:"Demo scholarship",
 noOfQuestions:10,duration:20,createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("scholarships",null,{}) } };
