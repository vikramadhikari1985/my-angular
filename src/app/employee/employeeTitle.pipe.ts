import {Pipe, PipeTransform} from "@angular/core";

/**
 * Created by admin on 8/20/2017.
 */
@Pipe({
    name:"employeeTitlee"
})
export class EmployeeTitlePipe implements PipeTransform {
    transform(value:string, gender:string): any{
       // console.log(annualSalary);
        if(gender.toLowerCase()=='male'){
            return "Mr."+ value;
        }else{
            return "Miss."+value;
        }
    }
}