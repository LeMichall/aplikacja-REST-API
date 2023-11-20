import { updateContact } from "../../repositories/updateContact.js";

export async function updateContactById(req, res, next) {
  const contact = await updateContact(req.params.contactId, req.body);
  if (!contact) {
    return res.status(400).json({ message: "missing fields" });
  }
  return res.status(200).json(contact);
}
