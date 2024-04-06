var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.render('index', { title: 'Mini Messageboard', messages: messages });
  }
  catch(err) {
    next(err);
  }

});

router.get('/new', function(req, res, next) {
  res.render('form',)
})

router.post('/new', function(req, res, next) {
  const {author, message} = req.body;
  console.log(req.body)
  messages.push({user: author, text: message, added: new Date()})
  res.redirect('/')
})


module.exports = router;
