import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    //co sie wyswietla
    public output;
    //pamiec kalkulatora
    value1;
    //czy zerowac wyswietlacz
    toZero;
    //ostatnia operacja
    lastOperation;
    //czy zablokowany
    blocked;
    //tryb pracy false - wprowadzamy liczby i operacje/ true - wykonujemy operacje
    mode;
    constructor() {
        this.output  = '0';
        this.value1 = '0';
        this.toZero = false;
        this.blocked = false;
        this.mode = false;
        this.lastOperation = '';
    }

    public setNumber(inValue: string) {
        if (! this.blocked) {
            if (this.toZero) {
                this.output = '0';
            }
            if (inValue == '.') {
                if (this.output.indexOf(inValue) < 0) {
                    this.output = this.output + inValue;
                }
            } else {
                if (this.output == '0') {
                    this.output = inValue;
                } else {
                    this.output = this.output + inValue;
                }
            }
            this.toZero = false;
        }
    }

    public clean() {
        this.output = '0';
        this.value1 = '0';
        this.toZero = false;
        this.mode = false;
        this.lastOperation = '';
        this.blocked = false;
    }

    public count() {
        if (!this.blocked && this.mode) {
            if (this.lastOperation != '') {
                this.mode = false;
                this.setOperation(this.lastOperation);
            }
            this.mode = false;
            this.lastOperation = '';
        }
    }

    public setOperation(inOperation: string) {
        if (!this.blocked && !this.mode) {
            switch (inOperation) {
                case '+': {
                    if (this.value1 != '0' && this.lastOperation != '') {
                        this.output = Number(this.value1) + Number(this.output) + '';
                    }
                    this.value1 = this.output;
                    this.mode = true;
                    this.toZero = true;
                    this.lastOperation = '+';
                    break;
                }
                case '-': {
                    if (this.value1 == '0' || this.lastOperation == '') {
                    } else {
                        this.output = Number(this.value1) - Number(this.output) + '';
                    }
                    this.value1 = this.output;
                    this.mode = true;
                    this.lastOperation = '-';
                    this.toZero = true;
                    break;
                }
                case '*': {
                    if (this.value1 == '0' || this.lastOperation == '') {
                    } else {
                        this.output = Number(this.value1) * Number(this.output) + '';
                    }
                    this.value1 = this.output;
                    this.mode = true;
                    this.toZero = true;
                    this.lastOperation = '*';
                    break;
                }
                case '/': {
                    if (this.value1 == '0' || this.lastOperation == '') {
                        this.value1 = this.output;
                    } else {
                        if (this.output == '0') {
                            this.blocked = true;
                            this.output = 'Nie dziel przez zero';
                        } else {
                            this.output = Number(this.value1) / Number(this.output) + '';
                            this.value1 = this.output;
                        }
                    }
                    this.mode = true;
                    this.lastOperation = '/';
                    this.toZero = true;
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }
    ngOnInit() {
    }
}
