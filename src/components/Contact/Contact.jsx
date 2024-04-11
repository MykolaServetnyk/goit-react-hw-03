import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { nanoid } from 'nanoid'


export default function Contact({contacts}) {
    return (
 <ul>
        {contacts.map(contact => {
          return (
        <li key={contact.id}>
          <p><FaUser /> {contact.name}</p>
          <p><FaPhoneAlt /> {contact.number}</p>
          <button type="button">Delete</button>
        </li>
      )})}
  </ul>

    )
}