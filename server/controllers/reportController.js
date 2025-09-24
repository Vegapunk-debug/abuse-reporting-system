const Report = require('../models/ReportSchema');

exports.addReport = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    // console.log("File Info:", req.file || req.files);
    const {
      userId,
      category,
      date,
      time,
      description,
      location,
      anonymous,
      contact,
      // department
    } = req.body;

    let files;
    if (req.file) {
      files = req.file.filename;
      console.log(files);
      console.log(req.file);
      
    }
    const newReport = new Report({
      userId: userId || null, 
      // department: department || null,
      category,
      date,
      time,
      description,
      location,
      anonymous,
      contact,
      originalFileName: files,
    });

    await newReport.save();
    res.status(201).json({ message: "Report added successfully", reportId: newReport._id });

  } catch (error) {
    console.error("Error adding report:", error);
    // res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};

exports.getReport = async (req, res) => {
  try {
    const reports = await Report.find()
    console.log(reports)
    res.status(200).json(reports);
  } catch (error) {
    console.error("Error fetching reports:", error);
  }
};

// const report = require('../models/ReportSchema');


// exports.addReport = async(req, res) => {
//     console.log(req.body)
//     const{name ,price,description}=req.body
//     const image=req?.file?.filename
    
//     try {
//         const newReport = new report({name,price,description,image})
//         await newReport.save()
//         res.status(201).json({message:"Report added successfully"})
//     } catch (error) {
//         console.log(error);
//     }
// }

// exports.getReport = async(req, res) => {
//     try {
//         const reports = await report.find();
//         console.log(reports);
//         res.status(200).json(reports);
        
//     } catch (error) {
//         console.log(error)
//     }
// }
