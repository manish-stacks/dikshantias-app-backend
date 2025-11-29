
'use strict';
module.exports = { async up(q){ return q.bulkInsert("banners",[{
 id:1,title:"Big Sale",imageUrl:"banner.png",linkUrl:"https://example.com",
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("banners",null,{}) } };
