const  BASE= 'https://dog.ceo/api';
const  BASE2= 'http://localhost:3000';


export const DOG_API_URLS = {
    all: `${BASE}/breeds/list/all`,
    breed: (breed?: string) =>  `${BASE}/breed/${breed}/images/random`
}


export const STATE_API_URLS = {
    all: `${BASE2}/data`,
}