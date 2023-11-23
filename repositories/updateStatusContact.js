import { Contact } from "#models/contacts.js";

export async function updateStatusContact(contactId, body) {
  const contact = await Contact.findByIdAndUpdate(
    contactId,
    { favorite: body.favorite },
    { new: true }
  );
  return contact;
}
