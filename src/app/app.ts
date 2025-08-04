import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraInputOutput } from "./calculadora-input-output/calculadora-input-output";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculadoraInputOutput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = "Calculadora de Matematicas";
}
