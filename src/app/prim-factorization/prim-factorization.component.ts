import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-prim-factorization',
  templateUrl: './prim-factorization.component.html',
  styleUrls: ['./prim-factorization.component.css']
})
export class PrimFactorizationComponent implements OnInit {

  parsedNumber!: number;
  number_to_be_factorized!: number;
  final_answer: string = '';
  step_by_step: string = '';
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  calculate(x: string){

    // check if it contains only numbers
    var expr = /^[0-9]*$/;

    if(!expr.test(x.toString())) 
    {
      this.step_by_step = 'Please insert a number';
      return;
    }

    this.parsedNumber = parseInt(x);

    this.final_answer = '';
    this.step_by_step = 'Step by step: <br>';

    let factor = 2;
    let factor_power = 0;

    if(this.parsedNumber <= 0)
    {
      this.step_by_step = ''
    }

    while(this.parsedNumber > 1){
      while(this.parsedNumber % factor === 0){
        let res = this.parsedNumber / factor;
        factor_power ++;

        this.step_by_step += x.toString() + " % " + factor.toString() + " = " + res.toString() + " ( " + factor.toString() + " ^ " + factor_power.toString() + " )<br>";

        this.parsedNumber = this.parsedNumber / factor;
      }

      if(factor_power > 0) this.final_answer = this.final_answer + factor + ' ^ ' + factor_power +  ' * ';

      factor_power = 0;
      factor ++;
    }

    this.final_answer = this.final_answer.substring(0, this.final_answer.length - 3);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  hide(){
    this.modalRef?.hide();
    window.location.reload();
  }
}
function template(template: any): BsModalRef<any> {
  throw new Error('Function not implemented.');
}

