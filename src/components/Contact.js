function Contact({ contact, onDelete, onToggleFavorite }) {
  return (
    <div className={`contact-card ${contact.favorito ? "favorite-card" : ""}`}>
      
      <h3>{contact.nombre} {contact.apellido}</h3>
      <p>{contact.telefono}</p>

      <div className="button-group">
        <button
          className="btn-gray"
          onClick={() => onDelete(contact.id)}
        >
          Eliminar
        </button>

        <button
          className="btn-gray"
          onClick={() => onToggleFavorite(contact.id)}
        >
          {contact.favorito ? "Quitar Favorito" : "Agregar Favorito"}
        </button>
      </div>

    </div>
  );
}

export default Contact;