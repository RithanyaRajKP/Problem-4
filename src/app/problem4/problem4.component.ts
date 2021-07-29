import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem4',
  templateUrl: './problem4.component.html',
  styleUrls: ['./problem4.component.scss']
})
export class Problem4Component  {

  constructor() { }

  a=0;
  d:any=[];
  one=0;two=0;three=0;four=0;
  five=0;six=0;sev=0;eig=0;nine=0;
  b:number[]=[1,2,3,4,5,6,23,44,55,67];
  leng=this.b.length;


  subclick(num:number){
    this.d.push(num);

  }


  resetclicked(){
    {
      this.a=0;
  this.d=[];
      this.one=0;this.two=0;this.three=0;this.four=0;
      this.five=0;this.six=0;this.sev=0;this.eig=0;this.nine=0;
  }
  }

  dsubmit()
{
for(var i=0;i<this.d.length;i++){
  if(this.d[i]%1==0){
    this.one++;
  }
  if(this.d[i]%2==0){
    this.two++;
  }
  if(this.d[i]%3==0){
    this.three++;
  }
  if(this.d[i]%4==0){
    this.four++;
  }
  if(this.d[i]%5==0){
    this.five++;
  }
  if(this.d[i]%6==0){
    this.six++;
  }
  if(this.d[i]%7==0){
    this.sev++;
  }
  if(this.d[i]%8==0){
    this.eig++;
  }
  if(this.d[i]%9==0){
    this.nine++;
  }
}
}

}
