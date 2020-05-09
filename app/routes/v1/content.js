var express = require('express');
var router = express.Router();
var ContentModel = require('../../models/contentModel.js');


// POST http://localhost:4000/api/v1/content
router.get('/', async function(req, res) {
  return res.json( await getContentResult({ uid: req.query.uid }) );
});

// POST http://localhost:4000/api/v1/content
router.post('/', function(req, res) {
  var Content = new ContentModel();
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

async function getContentResult(searchKeyWord) {
  let content = await ContentModel.find(searchKeyWord).then(function(content) {
    return content.map(value => { return { uid: value.uid, seo: value.seo } });
  }).then( (results) => {
    console.log(results);
    // let resultsContents = results.map(value => { return { uid: value.uid, seo: value.seo } });
    return results;
  }, (err) => {

  });
  return content;
}

// POST http://localhost:4000/api/v1/content
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
