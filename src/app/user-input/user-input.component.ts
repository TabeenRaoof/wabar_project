import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinanceService } from './services/fin.service';



@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
constructor(private service: FinanceService) { }

  keyword = '';
  enteredInitialInvestment = '0';



  onSubmit() {
    console.log('SUBMIT!');
  }

 

  onKeyup(key: KeyboardEvent) {
    console.log(key);
    this.keyword += key;
    console.log(this.keyword)
    this.service.search(this.keyword)
      .subscribe(data => {
        console.log(data);
      })



  }
}

