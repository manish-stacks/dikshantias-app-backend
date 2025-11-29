
'use strict';
module.exports = { async up(q){ return q.bulkInsert("batches",[{
 id:1,name:"Batch A",slug:"batch-a",displayOrder:1,programId:1,
 startDate:new.Date(),endDate:new.Date(),registrationStartDate:new.Date(),
 registrationEndDate:new.Date(),status:"active",shortDescription:"Batch A short",
 longDescription:"Batch A long",batchPrice:1999,batchDiscountPrice:1499,
 gst:18,offerValidityDays:30,imageUrl:"batch.png",
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("batches",null,{}) } };
