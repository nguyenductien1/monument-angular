export class Celebrite {
    numCelebrite: number;
    nom:string;
    prenom: string;
    nationalite: string;
    epoque: string;
    photoUrl: string;
    
    constructor(numCelebrite: number, nom: string, prenom: string, nationalite: string, epoque: string, photoUrl: string) {
        this.numCelebrite = numCelebrite;
        this.nom = nom;
        this.prenom = prenom;
        this.nationalite = nationalite;
        this.epoque = epoque; 
        this.photoUrl = photoUrl;
    }
    //Setter
    //numCelebrite is not presented here because it will be created by backend automatically;
    setNom(nom: string) { this.nom = nom; }
    setPrenom(prenom: string) { this.prenom = prenom; }
    setnationalite(nationalite: string) { this.nationalite = nationalite; }
    setEpoque(epoque: string){this.epoque = epoque;}
    setPhotoUrl(photoUrl: string){this.photoUrl = photoUrl;}

    //Getter
    getNumCelebrite() { return this.numCelebrite; }
    getNomCom():string { return this.nom;}
    getPrenom():string { return this.prenom;}
    getNationalite():string { return this.nationalite;}
    getEpoque():string { return this.epoque;}
    getPhotoUrl():string { return this.photoUrl;}

    //Methods
}
