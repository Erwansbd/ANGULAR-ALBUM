import { Chanson } from './chanson';
import { Genre } from './enum';

export class Album {
    id?: number;
    nom?: string;
    auteur?: string;
    note?: number;
    listeChanson?: Array<Chanson>;
    genre?: Genre

    constructor(args: Album = {}) {
        this.id = args.id;
        this.nom = args.nom;
        this.auteur = args.auteur;
        this.note = args.note;
        this.listeChanson = args.listeChanson;
        this.genre = args.genre;
    }
}

export const ALBUM = [
    new Album({ id: 0, nom: "When we fall Asleep, Where Do We Go?", auteur: "Billie Eilish", note: 9, listeChanson: [new Chanson({ titre: "Bad Guy", duree: 3.14 }), new Chanson({ titre: "xanny", duree: 4.04 }), new Chanson({ titre: "you should see me in a crown", duree: 3.01 })], genre: Genre.POP }),
    new Album({ id: 1, nom: "Beerbongs & Bentleys", auteur: "Post Malone", note: 8, listeChanson: [new Chanson({ titre: "rockstar", duree: 3.38 }), new Chanson({ titre: "Better Now", duree: 3.51 }), new Chanson({ titre: "Psycho", duree: 3.42 })], genre: Genre.POP }),
    new Album({ id: 2, nom: "Astroworld", auteur: "Travis Scott", note: 8, listeChanson: [new Chanson({ titre: "STARGAZING", duree: 4.31 }), new Chanson({ titre: "SICKO MODE", duree: 5.13 }), new Chanson({ titre: "WAKE UP", duree: 3.52 })], genre: Genre.POP }),
]