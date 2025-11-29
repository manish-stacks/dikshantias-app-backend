
'use strict';
module.exports = { async up(q){ return q.bulkInsert("pdfnotes",[{
 id:1,title:"Polity Notes",fileUrl:"notes.pdf",programId:1,
 createdAt:new.Date(),updatedAt:new.Date()
}]);}, async down(q){ return q.bulkDelete("pdfnotes",null,{}) } };
