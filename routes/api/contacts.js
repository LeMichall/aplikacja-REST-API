import express from "express";
import { validationMiddleware } from "../../validators/validator.js";
import { indexContacts } from "../../controllers/contacts/indexContacts.js";
import { showContacts } from "../../controllers/contacts/showContacts.js";
import { deleteContacts } from "../../controllers/contacts/deleteContacts.js";
import { updateContactById } from "../../controllers/contacts/updateContacts.js";
import { createContacts } from "../../controllers/contacts/createContacts.js";
import { updateStatus } from "../../controllers/contacts/updateStatusContact.js";

export const router = express.Router();

router.get("/", indexContacts);
router.get("/:contactId", showContacts);
router.post("/", validationMiddleware, createContacts);
router.delete("/:contactId", deleteContacts);
router.put("/:contactId", validationMiddleware, updateContactById);
router.patch("/:contactId/favorite", updateStatus);
