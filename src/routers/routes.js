const express = require("express");

const DiagnosticControls = require("../../controllers/diagnosticController");
const CustomerControls = require("../../controllers/customerController");

const router = new express.Router();

router.post("/diagnostic", DiagnosticControls.createDiagnostic);

router.post("/customers", CustomerControls.createCustomer);

router.post("/login", CustomerControls.Login);

module.exports = router;
