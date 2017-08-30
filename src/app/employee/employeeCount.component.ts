/**
 * Created by admin on 8/20/2017.
 */
/*import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCountComponent.html',
    styleUrls:['./employeeCountComponent.css']
})

export class EmployeeCountComponent{
    selectedRadioButtonValue:string='all';

    @Output
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;

    countRadioButtonSelectionChange(){
        this.countRadioButtonSelectionChanged.emit(this.selectRadioButtonValue);
        console.log(this.selectRadioButtonValue);
    }

}*/
import {Component, Input, Output, EventEmitter}from '@angular/core';

@Component({
    selector:'employee-count',
    templateUrl:'./employeeCount.component.html',
    styleUrls:['./employeeCount.component.css']
})

export class employeeCountComponent{
   /* selectedRadioButtonVaue:string ='All';

    @Output
    countRadioButtionSelectionChanged:EventEmitter<string> = new EventEmitter<string>();*/

    @Input()
    all:number;

    @Input()
    male:number;

    @Input()
    female:number;

    onRadioButtionSelectionChanged(){
       //this.countRadioButtionSelectionChanged.emit(this.selectedRadioButtonVaue);
        console.log(this.selectedRadioButtonVaue)
    }
}