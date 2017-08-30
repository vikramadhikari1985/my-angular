import {Component} from '@angular/core'

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
})
export class AppComponent{
  pageHeader:string='Employee Details';
  pageLogo:string='https://www.w3schools.com/css/trolltunga.jpg';

  firstName:string='vikram';
  lastName:string='Adhikari';
  fullName():string{
    return this.firstName + " " + this.lastName;
  }
  isDisable:boolean=true;
  pageHeaderNew:string="Employee details";
  classesToApply:string='buttonColor buttonWeight';
  applyBoldClass:boolean=true;
  applyItalicClass:boolean=true;

  addClass(){
    let classes={
        boldClass:this.applyBoldClass,
        italicsClass:this.applyItalicClass
    };
    return classes;
  };
  isBold:boolean=true;

  onClick():void{
    console.log("button clicked");
  };

}