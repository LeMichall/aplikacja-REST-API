import { getContactById } from "#repositories/showContacts.js";

export async function showContacts(req, res, next) {
  try {
    const contact = await getContactById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    return res.status(200).json(contact);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
