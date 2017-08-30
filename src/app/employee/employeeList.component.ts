/**
 * Created by admin on 8/14/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector:'list-employee',
    templateUrl:'./employeeList.component.html',
    styleUrls:['./employeeList.component.css']
})
export class EmpolyeeListComponent{
    employees:any[];
    constructor(){
        this.employees=[
            {code:'emp001', name:'Tom', gender:'Male',annualSalary:5500,dateofBirth:'10/6/1988'},
            {code:'emp102', name:'Alex', gender:'Male',annualSalary:6500,dateofBirth:'9/16/1990'},
            {code:'emp104', name:'Mary', gender:'Female',annualSalary:8500,dateofBirth:'6/6/1980'},
            {code:'emp105', name:'Saina', gender:'Female',annualSalary:9000,dateofBirth:'8/10/1995'},
            {code:'emp105', name:'Tina', gender:'Female',annualSalary:9000,dateofBirth:'8/10/1985'},
            {code:'emp102', name:'tester', gender:'Male',annualSalary:6500,dateofBirth:'9/16/1990'},
            {code:'emp02', name:'Manager', gender:'Male',annualSalary:6500,dateofBirth:'9/16/1980'}
        ]
    };

    getTotalEmployeeCount():number{
       return this.employees.length;
    }

    getTotalMaleEmployeeCount():number{
       return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount():number{
      return this.employees.filter(e => e.gender === "Female").length;
    }


}

