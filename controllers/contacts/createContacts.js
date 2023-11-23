import { addContact } from "#repositories/createContacts.js";

export async function createContacts(req, res, next) {
  const newContact = await addContact(req.body);
  if (!newContact) {
    return res.status(400).json({ message: "missing required name - field" });
  }
  return res.status(201).send(newContact);
}
