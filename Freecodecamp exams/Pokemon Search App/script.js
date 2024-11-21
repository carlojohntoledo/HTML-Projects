
// Get Elements by their id (#)
const pokemonimage = document.querySelector("#pokemon-cont")
const pokemonname = document.querySelector("#pokemon-name");
const pokemonid = document.querySelector("#pokemon-id");
const types = document.querySelector("#types");
const search = document.querySelector("#search-input");
const leftbutton = document.querySelector("#left-btn");
const upbutton = document.querySelector("#up-btn");
const downbutton = document.querySelector("#down-btn");
const rightbutton = document.querySelector("#right-btn");
const confirmbutton = document.querySelector("#search-button")
const clear = document.querySelector("#clear-button")
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const hhp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const speed = document.querySelector("#speed");
const spattack = document.querySelector("#special-attack");
const spdefense = document.querySelector("#special-defense");


// Initialize buttons
confirmbutton.onclick = goSearch;
clear.onclick = goClear;
upbutton.onclick = goUp;
leftbutton.onclick = goLeft;
downbutton.onclick = goDown;
rightbutton.onclick = goRight;

let id = 0;

function goSearch()
{
    // Clear previous content
    pokemonname.textContent = '';
    pokemonid.textContent = '';
    types.innerHTML = '';

    const originalString = search.value;
    //trim the string so all spaces will reduce, remove all non character and numerical value, all in lowercase
    const trimmedString = originalString.trim().replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    //if originalString has no value
    if (!originalString) 
    {
        
        alert('Please input a name or ID number');
        pokemonname.textContent = 'Name';
        pokemonid.textContent = 'ID';
        types.innerHTML = 'Type(s)';
        return;
    }

    //if originalString has value
    else
    {
        console.log(trimmedString);
        const pokemonName = trimmedString;  


        //Get the library api using fetch
        fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => 
        {
            console.log(data);

            pokemonname.innerHTML = `<span>${data.name}</span>`.toUpperCase();
            pokemonid.innerHTML = `<span>#${data.id}</span>`;
            weight.innerText = `${data.weight}`;
            height.innerText = `${data.height}`;
            hp.innerText = `${data.stats[0].base_stat}`;
            attack.innerText = `${data.stats[1].base_stat}`;
            defense.innerText = `${data.stats[2].base_stat}`;
            spattack.innerText = `${data.stats[3].base_stat}`;
            spdefense.innerText = `${data.stats[4].base_stat}`;
            speed.innerText = `${data.stats[5].base_stat}`;
            
            pokemonimage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${pokemonName}" />`;

            const moreTypes = data.types;
            if (moreTypes.length > 1) 
            {
                let typesContent = '';
                moreTypes.forEach(type => {
                    typesContent += `<span> ${type.type.name.toUpperCase()}</span>`;
                });
                types.innerHTML = typesContent;
            } 
            else 
            {
                types.innerHTML = `<span>${moreTypes[0].type.name.toUpperCase()}</span>`;
            }
        })
        .catch(error => 
        {
            alert(`Pokemon not found`);
            pokemonname.textContent = 'Name';
            pokemonid.textContent = 'ID';
            types.innerHTML = 'Type(s)';
        });
    }
} 


function goClear()
{
  // Clear previous content
    pokemonname.textContent = 'Name';
    pokemonid.textContent = 'ID';
    types.innerHTML = 'Type(s)';
    weight.innerText = '';
    height.textContent = '';
    hp.textContent = '';
    attack.textContent = '';
    defense.textContent = '';
    spattack.textContent = '';
    spdefense.textContent = '';
    speed.textContent = '';
    search.value = '';
    pokemonimage.innerHTML = '';
}


function goUp()
{


    pokemonid.textContent = id;
    id++;

    if(id > 1025)
    {
    id = 1;
    }

    console.log(id);

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`)
    .then(response => response.json())
    .then(data => 
    {
        console.log(data);

        pokemonname.innerHTML = `<span>${data.name}</span>`.toUpperCase();
        pokemonid.innerHTML = `<span>#${data.id}</span>`;
        weight.innerText = `${data.weight}`;
        height.innerText = `${data.height}`;
        hp.innerText = `${data.stats[0].base_stat}`;
        attack.innerText = `${data.stats[1].base_stat}`;
        defense.innerText = `${data.stats[2].base_stat}`;
        spattack.innerText = `${data.stats[3].base_stat}`;
        spdefense.innerText = `${data.stats[4].base_stat}`;
        speed.innerText = `${data.stats[5].base_stat}`;
        
        pokemonimage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${id}" />`;

        const moreTypes = data.types;
        if (moreTypes.length > 1) 
        {
            let typesContent = '';
            moreTypes.forEach(type => {
                typesContent += `<span> ${type.type.name.toUpperCase()}</span>`;
            });
            types.innerHTML = typesContent;
        } 
        else 
        {
            types.innerHTML = `<span>${moreTypes[0].type.name.toUpperCase()}</span>`;
            
        }
    })

}

function goDown()
{
      pokemonid.textContent = id;
      id--;

      if(id <= 0)
      {
        id = 1025;
      }
      
      console.log(id);

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        pokemonname.innerHTML = `<span>${data.name}</span>`.toUpperCase();
        pokemonid.innerHTML = `<span>#${data.id}</span>`;
        weight.innerText = `${data.weight}`;
        height.innerText = `${data.height}`;
        hp.innerText = `${data.stats[0].base_stat}`;
        attack.innerText = `${data.stats[1].base_stat}`;
        defense.innerText = `${data.stats[2].base_stat}`;
        spattack.innerText = `${data.stats[3].base_stat}`;
        spdefense.innerText = `${data.stats[4].base_stat}`;
        speed.innerText = `${data.stats[5].base_stat}`;
        
        pokemonimage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${id}" />`;

const moreTypes = data.types;
        if (moreTypes.length > 1) {
                let typesContent = '';
                moreTypes.forEach(type => {
                    typesContent += `<span> ${type.type.name.toUpperCase()}</span>`;
                });
                types.innerHTML = typesContent;
            } else {
                types.innerHTML = `<span>${moreTypes[0].type.name.toUpperCase()}</span>`;
            
        }
    })

}

function goRight()
{


      pokemonid.textContent = id;
      id += 10;

      if(id > 1025)
      {
        id = 1;
      }
      
      console.log(id);

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        pokemonname.innerHTML = `<span>${data.name}</span>`.toUpperCase();
        pokemonid.innerHTML = `<span>#${data.id}</span>`;
        weight.innerText = `${data.weight}`;
        height.innerText = `${data.height}`;
        hp.innerText = `${data.stats[0].base_stat}`;
        attack.innerText = `${data.stats[1].base_stat}`;
        defense.innerText = `${data.stats[2].base_stat}`;
        spattack.innerText = `${data.stats[3].base_stat}`;
        spdefense.innerText = `${data.stats[4].base_stat}`;
        speed.innerText = `${data.stats[5].base_stat}`;
        
        pokemonimage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${id}" />`;

const moreTypes = data.types;
        if (moreTypes.length > 1) {
                let typesContent = '';
                moreTypes.forEach(type => {
                    typesContent += `<span> ${type.type.name.toUpperCase()}</span>`;
                });
                types.innerHTML = typesContent;
            } else {
                types.innerHTML = `<span>${moreTypes[0].type.name.toUpperCase()}</span>`;
            
        }
    })

}

function goLeft()
{


      pokemonid.textContent = id;
      id-=10;

      if(id <= 0)
      {
        id = 1025;
      }
      console.log(id);

    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        pokemonname.innerHTML = `<span>${data.name}</span>`.toUpperCase();
        pokemonid.innerHTML = `<span>#${data.id}</span>`;
        weight.innerText = `${data.weight}`;
        height.innerText = `${data.height}`;
        hp.innerText = `${data.stats[0].base_stat}`;
        attack.innerText = `${data.stats[1].base_stat}`;
        defense.innerText = `${data.stats[2].base_stat}`;
        spattack.innerText = `${data.stats[3].base_stat}`;
        spdefense.innerText = `${data.stats[4].base_stat}`;
        speed.innerText = `${data.stats[5].base_stat}`;
        
        pokemonimage.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${id}" />`;

const moreTypes = data.types;
        if (moreTypes.length > 1) {
                let typesContent = '';
                moreTypes.forEach(type => {
                    typesContent += `<span> ${type.type.name.toUpperCase()}</span>`;
                });
                types.innerHTML = typesContent;
            } else {
                types.innerHTML = `<span>${moreTypes[0].type.name.toUpperCase()}</span>`;
            
        }
    })

}
