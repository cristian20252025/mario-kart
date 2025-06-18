
document.getElementById("boton").addEventListener("click", function() {
  window.location.href = "https://68518b1d8612b47a2c0a7dac.mockapi.io/api/v1/"; 
});

const boton = document.getElementById("boton-cargar");
const container = document.getElementById("usuarios-container");

boton.addEventListener("click", () => {
  const apiUrl = "https://68518b1d8612b47a2c0a7dac.mockapi.io/api/v1/users"; 

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la respuesta de la API");
      }
      return response.json();
    })
    .then(data => {
      container.innerHTML = "";

      data.forEach(usuario => {
        const div = document.createElement("div");
        div.className = "user";
        div.innerHTML = `
          <strong>ID:</strong> ${usuario.id}<br>
          <strong>Nombre:</strong> ${usuario.name}<br>
          <strong>Email:</strong> ${usuario.email}
        `;
        container.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Hubo un error:", error);
      container.innerHTML = "<p>Error al cargar los usuarios.</p>";
    });
});

