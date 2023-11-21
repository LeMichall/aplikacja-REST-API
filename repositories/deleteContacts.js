import { Contact } from "../models/contacts.js";

export async function removeContact(contactId) {
  try {
    await Contact.findByIdAndDelete(contactId);
  } catch (e) {
    console.log(e.toString());
  }
}
