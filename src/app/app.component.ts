import { Component } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo list';
  list:any[]=[];
  
  addTodo(item:any){
   this.list.push({id:this.list.length, name:item});
  }

  removeTask(id:number){
    //console.log(id);
    this.list=this.list.filter(item=>item.id!=id)
  }

}
