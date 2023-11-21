import { Contact } from "../models/contacts.js";

export async function getContactById(contactId) {
  try {
    const contact = await Contact.findById(contactId);
    return contact;
  } catch (e) {
    console.log(e.toString());
  }
}
