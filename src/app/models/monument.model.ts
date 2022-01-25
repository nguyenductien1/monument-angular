import { Celebrite } from "./celebrite.model"
import { Lieu } from "./lieu.model";
export class Monument {
    codeM:string;
    nomM:string;
    proprietaire:string;
    typeMonument:string;
    longitude:number;
    latitude:number;
    lieu?:Lieu;
    photoUrl:string;
    celebrities: Array<Celebrite>;
    constructor(codeM: string, nomM: string, proprietaire: string, typeMonument: string, 
        longitude: number, latitude: number, photoUrl: string, celebrities: Array<Celebrite>) {
        {
          this.codeM = codeM;
          this.nomM = nomM;
          this.proprietaire = proprietaire || '';
          this.typeMonument = typeMonument || '';
          this.longitude = longitude || 0;
          this.latitude = latitude || 0;
          this.photoUrl = photoUrl || '';
          this.celebrities = celebrities || [];
        }
    }
    //Setter
    setCodeM(codeM: string) {
        this.codeM = codeM;
    }
    setNomM(nomM: string) {
        this.nomM = nomM;
    }
    setProprietaire(proprietaire: string){
        this.proprietaire = proprietaire;
    }
    setTypeMonument(typeMonument: string){
        this.typeMonument = typeMonument;
    }
    setLongitude(longitude: number){
        this.longitude = longitude;
    }
    setLatitude(latitude: number){
        this.latitude = latitude;
    }
    setPhotoUrl(photoUrl: string){
        this.photoUrl = photoUrl;
    }
    //Getter
    getCodeM(): string {return this.codeM;}
    getNomM(): string {return this.nomM;}
    getProprietaire(): string {return this.proprietaire;}
    getTypeMonument(): string {return this.typeMonument;}
    getLongitude(): number {return this.longitude}
    getLatitude():number {return this.latitude}
    getPhotoUrl(): string {return this.photoUrl}

    //Methods

}
