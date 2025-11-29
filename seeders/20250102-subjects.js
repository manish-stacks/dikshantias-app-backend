
'use strict';
module.exports = { async up(q){ return q.bulkInsert("subjects",[{
 id:1,name:"Polity",slug:"polity",description:"Polity basics",
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("subjects",null,{}) } };
