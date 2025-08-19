document.addEventListener('DOMContentLoaded', () => {
  const div = document.getElementById('contenedor');
  if (div) {
    div.addEventListener('click', () => {
      alert('Hola! Soy el div');
    });
  }
});
