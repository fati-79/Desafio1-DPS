import { useState } from "react";
import Contact from "./Contact.js";
import initialContacts from "../data/contacts.json";

function ContactList() {
    

  const [contacts, setContacts] = useState(initialContacts);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    
    const regexLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    const regexTelefono = /^[0-9]{4}-[0-9]{4}$/;
  

  if (!regexLetras.test(nombre)) {
    alert("El nombre solo debe contener letras.");
    return;
  }

  if (!regexLetras.test(apellido)) {
    alert("El apellido solo debe contener letras.");
    return;
  }

  if (!regexTelefono.test(telefono)) {
    alert("El teléfono solo debe contener números.");
    return;

  };
  

  const newContact = {
    id: contacts.length + 1,
    nombre,
    apellido,
    telefono,
    favorito: false
  };

  const updatedContacts = [...contacts, newContact];

  updatedContacts.sort((a, b) => b.favorito - a.favorito);

  setContacts(updatedContacts);

  setNombre("");
  setApellido("");
  setTelefono("");
};

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const toggleFavorite = (id) => {
  const contactToToggle = contacts.find(c => c.id === id);

  if (!contactToToggle) return;

 
  if (contactToToggle.favorito) {
    const updatedContacts = contacts
      .map(c =>
        c.id === id ? { ...c, favorito: false } : c
      )
      .filter(c => c.id !== id);

    const updatedContact = { ...contactToToggle, favorito: false };

    setContacts([...updatedContacts, updatedContact]);

  } else {
    
    const updatedContacts = contacts
      .map(c =>
        c.id === id ? { ...c, favorito: true } : c
      )
      .filter(c => c.id !== id);

    const updatedContact = { ...contactToToggle, favorito: true };

    setContacts([updatedContact, ...updatedContacts]);
  }
};


  return (
  <div>
    <h1 className="title">Lista de Contactos</h1>

    <form className="form" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Nombre"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
    required
  />
  <input
    type="text"
    placeholder="Apellido"
    value={apellido}
    onChange={(e) => setApellido(e.target.value)}
    required
  />
  <input
  type="text"
  placeholder="Teléfono (0000-0000)"
  value={telefono}
  onChange={(e) => {
    let value = e.target.value.replace(/\D/g, ""); // elimina todo lo que no sea número

    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    if (value.length > 4) {
      value = value.slice(0, 4) + "-" + value.slice(4);
    }

    setTelefono(value);
  }}
  required
/>
  <button type="submit">Agregar Contacto</button>
</form>

    <div className="contact-container">
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={deleteContact}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  </div>
);
}

export default ContactList;