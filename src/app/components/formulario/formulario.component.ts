import { Component } from '@angular/core';
import { Palabra } from 'src/app/palabra';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  model = new Palabra (999,'Ingrese la palabra a modificar');


  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  
}