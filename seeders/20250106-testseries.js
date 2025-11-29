
'use strict';
module.exports = { async up(q){ return q.bulkInsert("testseriess",[{
 id:1,imageUrl:"testseries.png",title:"Polity Test Series",
 slug:"polity-test-series",displayOrder:1,status:"new",isActive:true,
 description:"Test series desc",price:299,discountPrice:199,gst:18,
 programId:1,createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("testseriess",null,{}) } };
