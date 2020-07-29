async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  //   console.log("response:", response);
  const data = await response.json();
  //   console.log("data:", data);
  return data;
}

async function init() {
  const pokemon = await getPokemon(22);
  //creamos un div con id="stat-pokemon"
  const statDiv = document.createElement("div");
  statDiv.classList.add("stat-pokemon");
  //agregamos el div dentro del main
  window.container.appendChild(statDiv);

  // creamos un titulo
  const titleStat = document.createElement("h2");
  titleStat.classList.add("title_stat");
  // definimos el valor del titulo
  titleStat.innerHTML = "Stats";
  //agregamos el titulo dentro del container
  window.container.appendChild(titleStat);

  var long = pokemon.stats.length;
  //   console.log("tamanio aaray:", long);
  // creamos los p

  const hr = document.createElement("hr");
  window.container.appendChild(hr);
  for (let i = 0; i < long; i++) {
    //creamos un p
    const stat = document.createElement("p");
    //agregamos el p al container
    window.container.appendChild(stat);
    //agregamos los ids
    let idStat = "stat_" + i;
    stat.setAttribute("id", idStat);

    // const br = document.createElement("br");
    // window.container.appendChild(br);

    // const imgStat = document.createElement("img");
    // window.container.appendChild(imgStat);
    // let idImgStat = "img_stat_" + i;
    // imgStat.setAttribute("id", idImgStat);

    const hr = document.createElement("hr");
    window.container.appendChild(hr);
  }
  updatePokemon(pokemon);
}

init();

function updatePokemon(pokemon) {
  //asigna al h1 con id="pokemon" el valor de pokemon.name
  window.pokemon.textContent = pokemon.name;
  //asigna a la imagen con id="image" el src de pokemon.sprites.front_default
  window.image.setAttribute("src", pokemon.sprites.front_default);

  var cont = 0;
  //recorremos los stats
  for (const stat of pokemon.stats) {
    //console.log(pokemon.stats);
    // console.log(stat.base_stat, stat.stat.name);

    /*
    recorremos la cantidad de stats y estaticamente vamos asignando a los p creados
    */
    if (cont == 0) {
      window.stat_0.textContent = stat.stat.name + ": " + stat.base_stat;
      //   window.base_stat_0.textContent = stat.base_stat;
      //   window.img_stat_0.setAttribute("src", stat.stat.url);
    }
    if (cont == 1) {
      window.stat_1.textContent = stat.stat.name + ": " + stat.base_stat;
    }
    if (cont == 2) {
      window.stat_2.textContent = stat.stat.name + ": " + stat.base_stat;
    }
    if (cont == 3) {
      window.stat_3.textContent = stat.stat.name + ": " + stat.base_stat;
    }
    if (cont == 4) {
      window.stat_4.textContent = stat.stat.name + ": " + stat.base_stat;
    }
    if (cont == 5) {
      window.stat_5.textContent = stat.stat.name + ": " + stat.base_stat;
    }
    cont = cont + 1;
  }
}

window.search.addEventListener("change", async () => {
  //console.log(window.search.value);
  const pokemon = await getPokemon(window.search.value);
  updatePokemon(pokemon);
});
