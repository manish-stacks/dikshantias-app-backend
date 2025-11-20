const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = require('./user')(sequelize, DataTypes);
const Batch = require('./batch')(sequelize, DataTypes);

const CourseCategory = require('./course_category')(sequelize, DataTypes);
const Course = require('./course')(sequelize, DataTypes);
const CourseVideo = require('./course_video')(sequelize, DataTypes);
const CourseProgress = require('./course_progress')(sequelize, DataTypes);

const PdfNote = require('./pdf_note')(sequelize, DataTypes);

const Test = require('./test')(sequelize, DataTypes);
const McqQuestion = require('./mcq_question')(sequelize, DataTypes);
const McqResult = require('./mcq_result')(sequelize, DataTypes);
const SubjectiveTest = require('./subjective_test')(sequelize, DataTypes);
const SubjectiveAnswer = require('./subjective_answer')(sequelize, DataTypes);

const Notification = require('./notification')(sequelize, DataTypes);
const UserNotification = require('./user_notification')(sequelize, DataTypes);

const Order = require('./order')(sequelize, DataTypes);

const Scholarship = require('./scholarship')(sequelize, DataTypes);
const ScholarshipApplication = require('./scholarship_application')(sequelize, DataTypes);
const ScholarshipResult = require('./scholarship_result')(sequelize, DataTypes);

// Associations
User.belongsTo(Batch, { foreignKey: 'batch_id' });


Course.belongsTo(CourseCategory, { foreignKey: 'category_id' });
CourseVideo.belongsTo(Course, { foreignKey: 'course_id' });
CourseProgress.belongsTo(User, { foreignKey: 'user_id' });
CourseProgress.belongsTo(CourseVideo, { foreignKey: 'video_id' });

PdfNote.belongsTo(Course, { foreignKey: 'course_id' });

McqQuestion.belongsTo(Test, { foreignKey: 'test_id' });
McqResult.belongsTo(User, { foreignKey: 'user_id' });
McqResult.belongsTo(Test, { foreignKey: 'test_id' });

SubjectiveTest.belongsTo(Test, { foreignKey: 'test_id' });
SubjectiveAnswer.belongsTo(Test, { foreignKey: 'test_id' });
SubjectiveAnswer.belongsTo(User, { foreignKey: 'user_id' });

UserNotification.belongsTo(User, { foreignKey: 'user_id' });
UserNotification.belongsTo(Notification, { foreignKey: 'notification_id' });

Order.belongsTo(User, { foreignKey: 'user_id' });
Order.belongsTo(Course, { foreignKey: 'course_id' });

ScholarshipApplication.belongsTo(Scholarship, { foreignKey: 'scholarship_id' });
ScholarshipApplication.belongsTo(User, { foreignKey: 'user_id' });
ScholarshipResult.belongsTo(Scholarship, { foreignKey: 'scholarship_id' });
ScholarshipResult.belongsTo(User, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  User, Batch, CourseCategory, Course, CourseVideo, CourseProgress,
  PdfNote, Test, McqQuestion, McqResult, SubjectiveTest, SubjectiveAnswer,
  Notification, UserNotification, Order,
  Scholarship, ScholarshipApplication, ScholarshipResult
};
