var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET car */
router.get('/', car_controlers.car_view_all_Page );
/* GET detail car page */
router.get('/detail', car_controlers.car_view_one_Page);
/* GET create car page */
router.get('/create', secured, car_controlers.car_create_Page);
/* GET create update page */
// router.get('/update', car_controlers.car_update_Page);
/* GET update car page */
router.get('/update', secured, car_controlers.car_update_Page);
/* GET create car page */
router.get('/delete', secured, car_controlers.car_delete_Page);


module.exports = router;