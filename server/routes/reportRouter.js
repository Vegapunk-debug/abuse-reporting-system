const express = require('express');
const multer = require('multer');
const path = require('path');
const { addReport, getReport } = require('../controllers/reportController');

const storage = multer.diskStorage({
    destination : (req, file, cbb) => {
        const location = path.join(__dirname, '../../client/public/image');
        cbb(null, location);
    },
    filename : (req, file, cbb) => {
        console.log(file.originalname);
        cbb(null, Date.now() + '-' + file.originalname)
        
    }
});
const upload = multer({storage : storage});
const router = express.Router();

router.post('/addReport', upload.single('file'), addReport);
router.get('/getReport', getReport);
// router.get('/getReportById/:id', getReportById);
// router.get('/getReportByUser/:userId', getReportByUser);
// router.put('/update/:id',updateReport)
module.exports = router;