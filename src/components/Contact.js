// Componente funcional que recibe props:
// contact → objeto con la información del contacto
// onDelete → función para eliminar el contacto
// onToggleFavorite → función para marcar/desmarcar favorito

function Contact({ contact, onDelete, onToggleFavorite }) {
  return (

    // Div principal de la tarjeta del contacto
    // Si el contacto es favorito se agrega la clase "favorite-card"
   
    <div className={`contact-card ${contact.favorito ? "favorite-card" : ""}`}>
    
    {/* Mostramos nombre y apellido */}
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
          // Cuando se hace clic ejecuta la función onToggleFavorite
          // enviando el id del contacto
          onClick={() => onToggleFavorite(contact.id)}
        >
          {contact.favorito ? "Agregar a Favoritos" : "Agregar a Favoritos"}
        </button>
      </div>

    </div>
  );
}
// Exportamos el componente para poder usarlo en ContactList
export default Contact;