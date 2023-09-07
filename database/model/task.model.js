const mongoose = require('mongoose');
// Full MongoDB Schema for the Task Model here
const taskSchema = mongoose.Schema(
	{
		task: { type: String },
		status: {
			type: String,
			enum: ['not done', 'doing', 'done'],
			default: 'not done',
		},
		cretedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamp: true }
);
// Sets the tasks with the proper schemas
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;