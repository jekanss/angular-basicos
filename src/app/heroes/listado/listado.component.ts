import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[] = [ 'Spiderman', 'IronMan', 'Hulk', 'Thor', "Strange" ];
  heroeBorrado: string = '';

  borrarHeroe(){
   
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);

    //this.heroes.splice(2,1); REMUEVE LE OBJETO 2 DEL ARREGLO Y DESDE AHI ELEIMINA 1 NADA MAS
  }  


}
