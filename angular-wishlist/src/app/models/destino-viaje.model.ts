export class DestinoViaje{
    private selected:boolean;
    constructor(public nombre:string,public imagenUrl:string){
    }
    isSelected(){
        return this.selected;
    } 
    setSelected(s:boolean){
        this.selected = s;
    }
}
