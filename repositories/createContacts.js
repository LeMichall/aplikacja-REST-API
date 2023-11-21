import { Contact } from "../models/contacts.js";

export async function addContact(body) {
  try {
    const newContact = new Contact(body);
    return await newContact.save();
  } catch (e) {
    console.log(e.toString());
  }
}
