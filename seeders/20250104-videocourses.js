
'use strict';
module.exports = { async up(q){ return q.bulkInsert("videocourses",[{
 id:1,imageUrl:"thumb.png",title:"Polity Lecture 1",videoSource:"youtube",
 url:"https://youtube.com/demo",batchId:1,subjectId:1,isDownloadable:false,
 isDemo:true,status:"active",programId:1,createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("videocourses",null,{}) } };
