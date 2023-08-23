import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any[] = []
  constructor(){}
  ngOnInit(): void {
    this.users = [
      {name:'Muhammed', age:28 , title:'Frontend Developer'},
      {name:'Hamdi', age:28 , title:'Frontend Developer'},
      {name:'Muhammed', age:28 , title:'Frontend Developer'},
      {name:'Hussin', age:28 , title:'Frontend Developer'},
      {name:'Ali', age:28 , title:'Frontend Developer'},
    ]
  }
}
