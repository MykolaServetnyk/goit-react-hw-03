import Contact from "../Contact/Contact";

export default function ContactList({contacts}) {

    return (
        <ul>
            <Contact contacts={contacts}/>
        </ul>
    )
}