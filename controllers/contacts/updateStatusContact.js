import { updateStatusContact } from "#repositories/updateStatusContact.js";

export async function updateStatus(req, res, next) {
  if (!req.body.favorite) {
    return res.status(400).json({ message: "missing field favorite" });
  }
  const contact = await updateStatusContact(req.params.contactId, req.body);
  return res.status(200).json(contact);
}
