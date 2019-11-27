export class Chanson {
    titre?: string;
    duree?: number;

    constructor(args: Chanson = {}) {
        this.titre = args.titre;
        this.duree = args.duree;
    }
}

