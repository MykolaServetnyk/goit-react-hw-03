import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  )
}
