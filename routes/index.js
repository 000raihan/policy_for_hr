var express = require('express');
var router = express.Router();


// const base_url = "http://localhost:6002"
const base_url = "http://116.68.200.97:56002"

const magazine_list = [
  {
    id:1,
    url:`${base_url}/administrative_and_financial`,
    thumb:"images/2022_1/Cronical-11-01.jpg",
    title: "Administrative and Financial Authority",
    sub_title: "February - April 2022"
  },
  {
    id:2,
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
    id:4,
    url:`${base_url}/travel_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Travel Policy",
    sub_title: "September - November 2022"
  },
  {
    id:5,
    url:`${base_url}/retirement_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Retirement Policy",
    sub_title: "September - November 2022"
  },
  {
    id:6,
    url:`${base_url}/radiant_csr_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Radiant_CSR Policy",
    sub_title: "September - November 2022"
  },
  {
    id:7,
    url:`${base_url}/promotion_policy`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Promotion Policy",
    sub_title: "September - November 2022"
  },
  {
    id:8,
    url:`${base_url}/chronical-12`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "CHRONICAL-12",
    sub_title: "September - November 2022"
  },
  {
    id:9,
    url:`${base_url}/financial_authority`,
    thumb:"images/2022_3/Chornical-13_page-0001.jpg",
    title: "Administrative and Financial Authority",
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

router.get('/retirement_policy', function (req, res, next) {
  res.render('retirement_policy');
});
router.get('/radiant_csr_policy', function (req, res, next) {
  res.render('radiant_csr_policy');
});
router.get('/promotion_policy', function (req, res, next) {
  res.render('promotion_policy');
});
router.get('/chronical-12', function (req, res, next) {
  res.render('chronical-12');
});
router.get('/financial_authority', function (req, res, next) {
  res.render('financial_authority');
});



module.exports = router;
