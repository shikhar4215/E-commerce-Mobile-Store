const express=require('express');
const router=express.Router();
const CtrlMobile=require('../controllers/list');

router
    .route('/list')
    .get(CtrlMobile.getlist)
    .post(CtrlMobile.createlist)
router
    .route('/list/:listid')
    .get(CtrlMobile.getSingle)
    .put(CtrlMobile.updateSingle)
    .delete(CtrlMobile.deleteSingle)

module.exports=router;
