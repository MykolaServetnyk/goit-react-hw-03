import Contact from "../Contact/Contact";

export default function ContactList({contacts}) {
    return (
        <div>
            <Contact contacts={contacts} />
        </div>
    )
}