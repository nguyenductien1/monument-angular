import { Dep } from "./dep.model";
import { Monument } from "./monument.model"

export class Lieu {
    codeInsee: number;
    nomCom: string;
    latitude: number;
    longitude: number;
    dep: Dep;
    listMonuments: Array<Monument>;
    constructor(codeInsee: number, nomCom: string, latitude: number, longitude: number, dep: Dep, listMonuments: Array<Monument>){
        
        this.codeInsee = codeInsee;
        this.nomCom = nomCom;
        this.latitude = latitude;
        this.longitude = longitude;
        this.dep = dep;
        this.listMonuments = listMonuments || [];
        
    }

    //Setter
    setCodeInsee(codeInsee: number){
        this.codeInsee = codeInsee;
    }
    setNomCom(nomCom: string){
        this.nomCom = nomCom;
    }
    setLatitude(latitude: number){
        this.latitude = latitude;
    }
    setLongitude(longitude: number){
        this.longitude = longitude;
    }
    setDep(dep: Dep){
        this.dep = dep;
    }
    setListMonuments(listMonuments: Array<Monument>){
        this.listMonuments = listMonuments;
    }
    //Getter
    getCodeInsee():number{ return this.codeInsee;}
    getNomCom(): string {return this.nomCom;}
    getLatitude():number{return this.latitude;}
    getLongitude():number{return this.longitude;}
    getdep():Dep {return this.dep}
    getListMonument(): Array<Monument>{return this.listMonuments;}
    //Methods
}
