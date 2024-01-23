const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
  let i = 0;
  results.results.forEach((pokemon) => {
    const option = document.createElement("option");
    option.value = i++;
    option.text = pokemon.name;
    document.querySelector("select").appendChild(option);

  });
}
getPokemon(url);
console.log("second: ", results);