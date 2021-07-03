const a = prompt("Valor inicial A:", 1);
const b = prompt("Valor inicial B:", 10);

const numeroPrimo = (numero) => {
  const raizNumero = Math.floor(Math.sqrt(numero)) + 1;

  // Casos Especiales
  if (numero == 0 || numero == 1 || numero == 4) return false;

  for (let i = 2; i < raizNumero; i++) {
    if (numero % i == 0) return false;
  }
  return true;
};

document.write("Estos son los numeros primos para ese Rango:");
document.write("<br/>");
document.write("<br/>");

for (let i = a; i < b; i++) {
  numeroPrimo(i) == true ? document.write(i + " ") : false;
}

const urlAPI =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=1a01f31533d5332e760bf12dd611ec82&ts=1&hash=871ffb6e72cb4a6cd3a90080c5c4d307";
fetch(urlAPI)
  .then((res) => res.json())
  .then((json) => {
    console.log(json, "RES.JSON");
  });

// 1b600f4bf228fc5405d09403f2f790b7a9eb61b611a01f31533d5332e760bf12dd611ec82
