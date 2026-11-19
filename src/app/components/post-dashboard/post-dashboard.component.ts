import { Component, OnInit } from '@angular/core';
import{Ipost} from 'src/app/model/post'
import{postArr} from '../../const/post'

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  postArr:Array<Ipost> = postArr

  postObj = {
    title:"Hello JS",
    body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quas soluta suscipit quod minus quisquam quam illum voluptas optio voluptate beatae a unde, id, eligendi cumque accusamus obcaecati perspiciatis totam.",
    userId:123,
    Id:123
  }

  
  

  constructor() { }

  ngOnInit(): void {
  }

}
