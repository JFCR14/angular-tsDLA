import { Component } from '@angular/core';
import { Personaje } from '../personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personajes: Personaje[] = [
    {id: 1, nombre: "Frodo", nivel: 25},
    {id: 2, nombre: "Roberto", nivel: 5},
    {id: 3, nombre: "Victor", nivel: 12}

  ];
  
  personajeSel!: Personaje; // declara la propiedad personajeSel para guardar el personaje sobre el que hacemos clic

  onSelect(personaje: Personaje): void {
    this.personajeSel = personaje;
  }
  
}

