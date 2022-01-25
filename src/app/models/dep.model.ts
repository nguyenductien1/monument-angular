import { Lieu } from "./lieu.model";

export class Dep {
    dep: number; //departement's number
    nomDep: string;
    chefLieu: Lieu;
    reg: string; //Region
    listLieux: Array<Lieu>;
    
    constructor(dep: number, nomDep: string, chefLieu: Lieu, reg: string, listLieux: Array<Lieu>) {
        this.dep = dep;
        this.nomDep = nomDep;
        this.chefLieu = chefLieu || null;
        this.reg = reg;
        this.listLieux = listLieux || [];

    }
    //Setter
    setDep(dep: number){this.dep = dep;}
    setNomDep(nomDep: string){this.nomDep = nomDep;}
    setChefLieu(chefLieu: Lieu){this.chefLieu = chefLieu;}
    setReg(reg: string){this.reg = reg;}
    setListLieux(listLieux: Array<Lieu>){this.listLieux = listLieux;}
    
    //Getter
    getDep(): number {return this.dep;}
    getNomDep(): string {return this.nomDep;}
    getChefLieu(): Lieu {return this.chefLieu}
    getListLieux(): Array<Lieu> {return this.listLieux}
    
    //Methods




}
