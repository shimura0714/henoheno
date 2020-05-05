var express = require('express');
var router = express.Router();
var ContentModel = require('../../models/contentModel.js');


// POST  http://localhost:4000/api/v1/content
router.post('/', function(req, res) {
  var Content = new ContentModel();
  console.log(req.body);
  console.log(Content);
  Content.uid = req.body.uid;
  Content.keyword = req.body.keyword;
  Content.seo = req.body.seo;
  Content.date = req.body.date;

  Content.save(function(err) {
    if(err) {
      res.send(err);
    } else {
      res.json({
        message: 'Successfully saved'
      });
    }
  });
});

//routerをモジュールとして扱う準備
module.exports = router;
