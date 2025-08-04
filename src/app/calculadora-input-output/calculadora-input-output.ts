import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from "../formulario/formulario";

@Component({
  selector: 'app-calculadora-input-output',
  standalone: true,
  imports: [FormsModule, Formulario],
  templateUrl: './calculadora-input-output.html',
  styleUrl: './calculadora-input-output.css'
})
export class CalculadoraInputOutput {
      resultado: number | null = null;

      procesarResultado(resultado: number){
        this.resultado = resultado;
      }
  }