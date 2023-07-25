// Aqui el usuario ingresa el monto a comprar
let itemPrice = parseFloat(prompt("Ingrese el precio del pantalón (en ¢):"));

// Se revisa si el precio igresado es un numero valido
if (isNaN(itemPrice)) {
  alert("Precio inválido. Por favor ingrese un número válido para el precio del artículo.");
} else {
  // Inicializar variables para descuento y precio final
  let discountPercentage;
  let finalPrice;

  // Aplicar descuento en función del rango de precios
  if (itemPrice >= 10000 && itemPrice <= 20000) {
    discountPercentage = 5;
  } else if (itemPrice > 20000 && itemPrice <= 30000) {
    discountPercentage = 10;
  } else if (itemPrice > 30000) {
    discountPercentage = 15;
  } else {
    alert("El precio del artículo debe ser mínimo ¢10000.");
  }

  // Calcula el precio final después de aplicar el descuento
  if (discountPercentage !== undefined) {
    const discountAmount = (itemPrice * discountPercentage) / 100;
    finalPrice = itemPrice - discountAmount;
  }

  // Mostrar el precio final con el descuento aplicado
  if (finalPrice !== undefined) {
    alert("Monto total a pagar con descuento aplicado: ¢" + finalPrice.toFixed(2));
  }
}