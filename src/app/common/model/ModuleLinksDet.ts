export class ModuleLinksDet{
    MLD_faIcon:string;
    MLD_title:string;
    MLD_description:string;
    MLD_faIconSecondary?:string;
    constructor(faIcon:string, title:string, description:string, secondaryIcon:string){
        this.MLD_faIcon = faIcon;
        this.MLD_title =  title;
        this.MLD_description = description;
        this.MLD_faIconSecondary = secondaryIcon;
    }
}