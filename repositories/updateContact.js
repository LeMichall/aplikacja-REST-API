import { Contact } from "#models/contacts.js";

export async function updateContact(contactId, body) {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(contactId, body, {
      new: true,
    });
    return updatedContact;
  } catch (error) {
    console.log(error.toString());
  }
}
