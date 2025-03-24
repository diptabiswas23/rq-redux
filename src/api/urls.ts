const  BASE= 'https://dog.ceo/api';

export const DOG_API_URLS = {
    all: `${BASE}/breeds/list/all`,
    breed: (breed?: string) =>  `${BASE}/breed/${breed}/images/random`
}