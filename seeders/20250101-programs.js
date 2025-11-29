
'use strict';
module.exports = { async up(q){ return q.bulkInsert("programs",[{
 id:1,name:"UPSC Foundation",imageUrl:"program1.png",
 description:"UPSC foundation program",createdAt:new Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("programs",null,{}) } };
