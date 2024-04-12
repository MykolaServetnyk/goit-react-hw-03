import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({ contact, onDelete }) {
  const { id, name, number } = contact;

  return (
    <div>
      <p><FaUser /> {name}</p>
      <p><FaPhoneAlt /> {number}</p>
      <button type="button" onClick={() => onDelete(id)}>Delete</button>
    </div>
  )
}
