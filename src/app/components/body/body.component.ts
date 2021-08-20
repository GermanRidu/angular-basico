import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class bodyComponent {
    frase:any = {
        mensaje: 'Un gran poder ta chilo',
        autor: 'Ben Parker'
    }

    mostrar = true;

    personajes:string [] = ["spiderman", "venom", "dococ"];
}