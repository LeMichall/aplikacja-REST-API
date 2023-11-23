import { listContacts } from "#repositories/indexContacts.js";

export async function indexContacts(req, res, next) {
  try {
    const contacts = await listContacts();
    return res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
