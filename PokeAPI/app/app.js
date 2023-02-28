let names = '';
let id = 1;
let offsetPage = 0;
let limitPage = 20;
let lastPokemonShowed = null;
let img = null;
let pokearray = [];

// document.getElementById('moreBtn').addEventListener('click', btnMore = () => {
//     offsetPage<=1000 ? (offsetPage+= 20) : console.log('There are not Pokemons else to show');
//     obtenerAPI();
// });

let observerScroll = new IntersectionObserver((entry, observerScroll) => {
    entry.forEach(entry => {
        if (entry.isIntersecting) {
            offsetPage<1020 ? (offsetPage+= 20) : console.log('There are not Pokemons else to show');
            obtenerAPI();
        }
    })
}, {
    rootMargin : '0px 0px 0px 0px',
    threshold : 1.0,
});

const obtenerAPI = async() => {
    try {
        const ans = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offsetPage}&limit=${limitPage}`);
        // console.log(ans);

        if (ans.status === 200) {
            ans.data.results.forEach(pokemon => {
                if (id<1008) img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                else img = 'https://miro.medium.com/max/1400/1*lXH0CroMTAQKIfDzn-brPw.png';
                names+=`
                    <div class="gridlayout__box">
                        <div class="box__img">
                            <img src="${img}" alt="Image of ${pokemon.name}">
                        </div>
                        <h2 class="box__title">${pokemon.name}</h2>
                        <div class="box__info">
                            <span class="info__id">INFORMATION</span>
                            <span class="info__id">ID: ${id}</span>
                        </div>
                    </div>
                `;
                id++;
            });

            document.getElementById('container__box').innerHTML = names;

            if (offsetPage < 1020 ) {
                if(lastPokemonShowed) {
                    observerScroll.unobserve(lastPokemonShowed);
                }
    
                const pokemonsShowed = document.querySelectorAll('.main__gridlayout .gridlayout__box');
                lastPokemonShowed = pokemonsShowed[pokemonsShowed.length-1];
                // console.log(lastPokemonShowed);
                observerScroll.observe(lastPokemonShowed);
            }

            // console.log('Si se pudo pintar');
        }
        else {
            console.log('Control point');
        }

    } catch(error) {
        console.log(error);
        let errortitle = `Oops... An error has ocurred...`;
        let errordesc = `There's nothing to show.`;        
        document.getElementById('maindoc').innerHTML = 
        `
        <div class="gridlayout__error">
            <h2 id="errortitle"></h2>
            <h3 id="errordesc"></h3>
        </div>
        `;
        document.getElementById('errortitle').append(errortitle);
        document.getElementById('errordesc').append(errordesc);
    } // finally {
    //     console.log('Conexión finalizada');
    // }
}

obtenerAPI();

const showFn = pokemonObject => {
    return {
        name : '',
    }
}

document.addEventListener('alpine:init', () => {
    Alpine.data('pokeFetch', () => ({
        search : '',
        pokemon : null,
        pokeimg : null,
        pokename : null,
        pokestats : [],
        lookFor() {
            axios.get(`/`+`${this.search}`)
            .then(response => {
                this.pokemon = response.data;
                this.pokename = response.data.species.name;
                this.pokeimg = response.data.sprites.front_default;
                response.data.stats.forEach(entry => {
                    pokearray.push(entry);
                })
                this.pokestats += pokearray;
                console.log(this.pokemon, this.pokename, this.pokeimg, this.pokestats, pokearray);
            })
            },
    }))
});

// or

// const fetchFn = () => {
//     return {
//         search : '',
//     }
// } 