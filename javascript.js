// Definición de la clase Destino
function Destino(pais, ciudad, precioPasaje, diasAQuedarse, precioEstadiaPorNoche) {
    this.nombre = pais;
    this.ciudad = ciudad;
    this.precioPasaje = precioPasaje;
    this.diasAQuedarse = diasAQuedarse;
    this.precioEstadia = precioEstadiaPorNoche;
  }
  
  // Creación de los destinos
  const destino1 = new Destino("Francia", "París", 3500, 6, 820);
  const destino2 = new Destino("Francia", "Lyon", 2800, 4, 650);
  const destino3 = new Destino("Francia", "Niza", 3200, 5, 750);
  const destino4 = new Destino("Inglaterra", "Londres", 2200, 7, 1100);
  const destino5 = new Destino("Inglaterra", "Manchester", 1800, 5, 900);
  const destino6 = new Destino("Inglaterra", "Liverpool", 1900, 4, 800);
  const destino7 = new Destino("Países Bajos", "Ámsterdam", 2500, 5, 950);
  const destino8 = new Destino("Países Bajos", "Róterdam", 2100, 3, 700);
  const destino9 = new Destino("Países Bajos", "La Haya", 2400, 4, 850);
  const destino10 = new Destino("Portugal", "Lisboa", 3000, 6, 700);
  const destino11 = new Destino("Portugal", "Oporto", 2800, 5, 600);
  const destino12 = new Destino("Portugal", "Faro", 2600, 4, 550);
  const destino13 = new Destino("Italia", "Roma", 2800, 6, 800);
  const destino14 = new Destino("Italia", "Florencia", 2500, 5, 700);
  const destino15 = new Destino("Italia", "Venecia", 3200, 7, 900);
  const destino16 = new Destino("Suecia", "Estocolmo", 3400, 5, 1000);
  const destino17 = new Destino("Suecia", "Gotemburgo", 2900, 4, 800);
  const destino18 = new Destino("Suecia", "Malmo", 2600, 3, 700);
  
  // Array de destinos
  const destinos = [
    destino1,
    destino2,
    destino3,
    destino4,
    destino5,
    destino6,
    destino7,
    destino8,
    destino9,
    destino10,
    destino11,
    destino12,
    destino13,
    destino14,
    destino15,
    destino16,
    destino17,
    destino18
  ];
  
  // Objeto que mapea destinos a ciudades 
  const ciudadesPorDestino = {
    Francia: ["París", "Lyon", "Niza"],
    Inglaterra: ["Londres", "Manchester", "Liverpool"],
    "Países Bajos": ["Ámsterdam", "Róterdam", "La Haya"],
    Portugal: ["Lisboa", "Oporto", "Faro"],
    Italia: ["Roma", "Florencia", "Venecia"],
    Suecia: ["Estocolmo", "Gotemburgo", "Malmo"]
  };
  
  // Elementos del formulario y alertas
  const destinoSelect = document.getElementById("destino");
  const ciudadSelect = document.getElementById("ciudad");
  const diasRecomendados = document.getElementById("diasRecomendados");
  const precioPasajeAlert = document.getElementById("precioPasaje");
  const precioHospedaje = document.getElementById("precioHospedaje");
  const calcularBtn = document.getElementById("calcularBtn");
  const costoTotalAlert = document.getElementById("costoTotal");
  const invalidDestinoAlert = document.getElementById("invalidDestino");
  
  // Variable para almacenar el destino seleccionado
  let destinoSeleccionado;
  
  // Evento de clic para el botón "Calcular"
  calcularBtn.addEventListener("click", function() {
    const seleccionado = destinoSelect.value;
    const ciudadSeleccionada = ciudadSelect.value;
    destinoSeleccionado = destinos.find(
      destino => destino.nombre === seleccionado && destino.ciudad === ciudadSeleccionada
    );
  
    if (destinoSeleccionado) {
      const preguntaDias = parseInt(dias.value);
  
      if (isNaN(preguntaDias)) {
        Swal.fire(
          'Wrong!',
          'Por favor, ingresa un número válido para los días.',
          'error'
        )
          return;
      }
  
      const costoEstadia = preguntaDias * destinoSeleccionado.precioEstadia;
      const costoTotal = costoEstadia + destinoSeleccionado.precioPasaje;
  
      precioPasajeAlert.textContent = destinoSeleccionado.precioPasaje;
      costoTotalAlert.textContent = costoTotal;
  
      invalidDestinoAlert.style.display = "none";
      precioPasajeAlert.style.display = "block";
      costoTotalAlert.style.display = "block";
  
      // Guardar la elección del usuario en el Local Storage
      localStorage.setItem("eleccionUsuario", JSON.stringify({
        destino: seleccionado,
        ciudad: ciudadSeleccionada,
        dias: preguntaDias,
        costoTotal: costoTotal
    
  
        
      }));
  // Alerta de confirmación del viaje
      Swal.fire({
        title: 'Genial!',
        text: 'Acabas de planear tu viaje',
        imageUrl: 'https://plus.unsplash.com/premium_photo-1679758630312-a3d601c411d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZpb258ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Sólo queda esperar',
      });
    }
    });
  
  // Consologueo la elección de usuario
  console.log (localStorage.getItem("eleccionUsuario"));
  
      // Crear la tarjeta con los datos de la elección del usuario
      const tarjetaContainer = document.getElementById("tarjetaContainer");
      const eleccionUsuario = JSON.parse(localStorage.getItem("eleccionUsuario"));
  
      if (eleccionUsuario) {
        const tarjetaHTML = `
          <div class="card">
            <h2>Elección del usuario</h2>
            <p>Destino: ${eleccionUsuario.destino}</p>
            <p>Ciudad: ${eleccionUsuario.ciudad}</p>
            <p>Días de estadía: ${eleccionUsuario.dias}</p>
            <p>Costo total: ${eleccionUsuario.costoTotal}</p>
          </div>
        `;
  
        tarjetaContainer.innerHTML = tarjetaHTML;
      }
    else {
      invalidDestinoAlert.style.display = "block";
      precioPasajeAlert.style.display = "none";
      costoTotalAlert.style.display = "none";
    };
  
  // Evento de cambio para el select de destino
  destinoSelect.addEventListener("change", function() {
    const seleccionado = destinoSelect.value;
  
    // Obtener las ciudades correspondientes al destino seleccionado
    const ciudades = ciudadesPorDestino[seleccionado];
  
    // Limpiar las opciones del select de ciudad
    ciudadSelect.innerHTML = "";
  
    // Crear las opciones del select de ciudad basadas en las ciudades correspondientes al destino
    ciudades.forEach(function(ciudad) {
      const option = document.createElement("option");
      option.value = ciudad;
      option.textContent = ciudad;
      ciudadSelect.appendChild(option);
    });
  
    // Habilitar el select de ciudad
    ciudadSelect.disabled = false;
  
    // Actualizar los precios y la cantidad de días recomendados
    actualizarPreciosYDias();
  });
  
  // Evento de cambio para el select de ciudad
  ciudadSelect.addEventListener("change", function() {
    actualizarPreciosYDias();
  });
  
  // Función para actualizar los precios y la cantidad de días recomendados
  function actualizarPreciosYDias() {
    const seleccionado = destinoSelect.value;
    const ciudadSeleccionada = ciudadSelect.value;
    destinoSeleccionado = destinos.find(
      destino => destino.nombre === seleccionado && destino.ciudad === ciudadSeleccionada
    );
  
    if (destinoSeleccionado) {
      diasRecomendados.textContent = `Cantidad sugerida de días: ${destinoSeleccionado.diasAQuedarse}`;
      precioPasajeAlert.textContent = `El precio aproximado de un vuelo a esa ciudad en esta época del año es: ${destinoSeleccionado.precioPasaje}`;
      precioHospedaje.textContent = `El hospedaje en esa ciudad cuesta aproximadamente: ${destinoSeleccionado.precioEstadia}.`;
    } else {
      diasRecomendados.textContent = "";
      precioPasajeAlert.textContent = "";
      precioHospedaje.textContent = "";
    }
  }
  
  // Evento de carga del documento
  document.addEventListener("DOMContentLoaded", function() {
  
    $(document).ready(function() {
      $('#calendar').fullCalendar({
        selectable: true,
        select: function(start) {
          let selectedStartDate = moment(start).format('YYYY-MM-DD');
  
          if (!destinoSeleccionado) {      
            Swal.fire(
            'Wrong!',
            'Primero elegí un destino',
            'error'
          );
            return;
          }
  
          let selectedEndDate = moment(selectedStartDate).add(destinoSeleccionado.diasAQuedarse, 'days').format('YYYY-MM-DD');
  
          alert('Fecha seleccionada: ' + selectedStartDate + ' - ' + selectedEndDate);
        }
      });
    });
  });
  
  