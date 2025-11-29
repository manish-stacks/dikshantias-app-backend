
'use strict';
module.exports = { async up(q){ return q.bulkInsert("faqs",[{
 id:1,question:"What is UPSC?",answer:"UPSC is Union Public Service Commission.",
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("faqs",null,{}) } };
