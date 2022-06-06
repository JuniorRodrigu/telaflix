const API_KEY = '927aeb2a76fb169a7c468d9f8c2f4356';
const API_BASE = 'https://api.themoviedb.org/3';



const basicFetch = async (andpoint) => {
const rep = await fetch (`${API_BASE}${andpoint}`);
const json = await rep.json();
return json;
}







// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'original Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`)

            },
            {

                slug: 'trending',
                title: 'Recomendado para Você',
                items:  await basicFetch(`/trending/all/week?language=pt-br&api_key=${API_KEY}`)

            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch (`/movie/top_rated?language=pt-br&api_key=${API_KEY}`)

            },
            {
                slug: 'action',
                title: 'Ação',
                items: (`/discover/movie?with_genres=28&language=pt-br&api_key=${API_KEY}`)


            },
            {
                slug: 'comedy',
                title: 'Comedia',
                items: (`/discover/movie?with_genres=35&language=pt-br&api_key=${API_KEY}`)


            },
            {
                slug: 'horror',
                title: 'Terro',
                items: (`/discover/movie?with_genres=27&language=pt-br&api_key=${API_KEY}`)


            },

            {
                slug: 'romance',
                title: 'Romance',
                items: (`/discover/movie?with_genres=10749&language=pt-br&api_key=${API_KEY}`)


            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: (`/discover/movie?with_genres=99 &language=pt-br&api_key=${API_KEY}`)


            },

        ];

    }





}