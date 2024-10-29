// Generar la gráfica de consumo semanal
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("grafica").getContext("2d");
  const grafica = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
      datasets: [
        {
          label: "Litros de agua",
          data: [3, 2.5, 4, 3.5, 5, 2, 4], // Datos de consumo de agua
          backgroundColor: "#3498db",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
