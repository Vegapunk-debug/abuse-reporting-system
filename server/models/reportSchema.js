// const mongoose = require('mongoose');
// const ReportSchema = mongoose.Schema({
//     name: String,
//     price: Number,
//     description: String,
//     image: String
// })
// module.exports = mongoose.model("reports",ReportSchema)
const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  date: {
    type: String, 
    required: true
  },
  time: {
    type: String
  },
  anonymous: {
    type: String,
    enum: ['yes', 'no'],
    required: true
  },
  contact: {
    type: String
  },
  // filePath: {
  //   type: String 
  // },
  originalFileName: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reports', ReportSchema);


// const mongoose = require('mongoose')

// const reportSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     department:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Department',
//     },
//     reportType: {
//         type: String,
//         required: true
//     },
//     incidentDate: {
//         type: String,
//         required: true
//     },
//     incidentTime: {
//         type: String,
//         required: true
//     },
//     incidentDescription: {
//         type: String,
//         required: true
//     },
//     incidentAddress: {
//         type: String,
//         required: true
//     },
//     incidentCity: {
//         type: String,
//         required: true
//     },
//     incidentState: {
//         type: String,
//         required: true
//     },
//     incidentZip: {
//         type: String,
//         required: true
//     },
//     files: {
//         type: [String],
//         required: true
//     },
//     status: {
//         type: String,
//         default: 'pending',
//         enum: ['pending', 'Under-Investigation', 'Resolved']
//     },

// })

// module.exports = mongoose.model('reports', reportSchema)

