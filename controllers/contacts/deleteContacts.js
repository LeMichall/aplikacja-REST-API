import { removeContact } from "../../repositories/deleteContacts.js";

export async function deleteContacts(req, res, next) {
  const contact = await removeContact(req.params.contactId);
  if (contact) {
    return res.status(200).json({ message: "contact deleted" });
  }
  return res.status(404).json({ message: "Not Found" });
}
