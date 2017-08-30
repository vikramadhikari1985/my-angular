/**
 * Created by admin on 8/12/2017.
 */
import {Component} from '@angular/core'

@Component({
    selector:'my-employee',
    templateUrl:'./employee.component.html',
    styleUrls:['./employee.component.css']
})

export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName:string='bisht';
    gender:string='mail';
    age:number=28;
    isFontSize:number=35;

    showDetails:boolean=false;
    toggleDetials():void{
        this.showDetails=!this.showDetails;
        console.log("this value", this.showDetails)
    }
}







