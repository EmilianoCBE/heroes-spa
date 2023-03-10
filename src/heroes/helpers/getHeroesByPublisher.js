import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

    const validPublishers = ['Marvel Comics', 'DC Comics']

    if(!validPublishers.includes(publisher)){
        throw new Error(`Invalid publisher: ${validPublishers}`)
    }

    return heroes.filter(heroe => heroe.publisher === publisher)
}