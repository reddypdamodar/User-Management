const express = require("express");
path = require("path");
const router = express.Router();
let Form = require("../models/form");
const { Excel } = require("../models/inf");

const {
  check,
  pushdata,
  excel,
  login,
  result,
  form,
  resultRedirect,
  excelRedirect,
} = require("../controller/controller");

router.get("/form", form);

router.get("/", login);

router.get("/result", result);
router.post("/result", resultRedirect);

router.post("/excel", excelRedirect);

router.get("/download", excel);

router.post("/excel", excelRedirect);

router.post("/info", check);
//creating form
router.post("/", pushdata);

module.exports = router;
