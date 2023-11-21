import { Contact } from "../models/contacts.js";

export async function listContacts() {
  try {
    return await Contact.find();
  } catch (error) {
    console.error(error.message);
  }
}
