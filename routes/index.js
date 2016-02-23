var express = require('express');
var router = express.Router();
var multer = require('multer')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage, limits: {fileSize:1024*1024} })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/file', upload.single('file-input'), function(req, res, next) {
  if (req.file){
    res.json({
      "size": req.file.size
    })  
  }
  else{
    res.send(''); 
  }
})

module.exports = router;
