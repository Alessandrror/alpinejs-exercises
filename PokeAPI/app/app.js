// document.addEventListener('alpine:init', () => {
//     Alpine.data('pokemonSearch', () => ({
//         search: '',
//         pokemon: null,
//         searchingPokemon() {
//             fetch(`https://pokeapi.co/api/v2/pokemon/${this.search}`)
//                 .then(response => response.json())
//                 .then(data => {this.pokemon = data});
//         }
//     }))
// })

document.addEventListener('alpine:init', () => {
    Alpine.data('pokemonSearch', () => ({
        search: '',
        pokemon: null,
        searchingPokemon() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.search}`)
            .then(response => {this.pokemon = response.data})
            .catch( (error) => console.log(error));
        }
    }))
})

