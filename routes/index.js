var express = require('express');
var router = express.Router();


// const base_url = "http://localhost:6002"
const base_url = "http://116.68.200.97:6055"

const magazine_list = [
  {
    id:1,
    url:`${base_url}/administrative_and_financial`,
    thumb:"images/2022_1/Cronical-11-01.jpg",
    title: "Administrative and Financial Authority",
    sub_title: "February - April 2022"
  },
  {
    id:3,
    url:`${base_url}/loan`,
    thumb:"images/2022_2/CHRONICAL-12-01.jpg",
    title: "Loan Against Provident Fund",
    sub_title: "May - August 2022"
  },
  {
    id:3,
    url:`${base_url}/posting_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Posting, Transfer and Deputation Policy",
    sub_title: "September - November 2022"
  },
  {
    id:3,
    url:`${base_url}/travel_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Travel Policy",
    sub_title: "September - November 2022"
  },
]

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Radiant', magazine_list:magazine_list});
});
router.get('/administrative_and_financial', function (req, res, next) {
  res.render('administrative');
});
router.get('/loan', function (req, res, next) {
  res.render('loan');
});
router.get('/posting_policy', function (req, res, next) {
  res.render('posting_policy');
});
router.get('/travel_policy', function (req, res, next) {
  res.render('travel_policy');
});



module.exports = router;
