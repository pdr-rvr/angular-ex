import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  pessoa: segurado = new segurado();

  calcularApolice() {
    const { genero, idade, valorAutomovel } = this.pessoa;

    if (genero === 'masculino') {
      if (idade <= 25) {
        this.pessoa.valorApolice = valorAutomovel * 0.15;
      } else {
        this.pessoa.valorApolice = valorAutomovel * 0.10;
      }
    } else if (genero === 'feminino') {
      this.pessoa.valorApolice = valorAutomovel * 0.08;
    }
  }

  formatCurrency(value: number | null): string {
    if (value === null) return '';
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  }
}

export class segurado {
  nome: string = '';
  genero: string = '';
  idade: number = 0;
  valorAutomovel: number = 0;
  valorApolice: number | null = null;
}

@NgModule({
  declarations: [FormularioComponent],
  imports: [FormsModule],
})
export class FormularioModule { }
