import { Component, OnInit } from '@angular/core';
import { RouterModule , Route, Router, ActivatedRoute,ParamMap} from '@angular/router';
import { PicklesComponent } from '../pickles/pickles.component';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
menu:any=[];
  constructor(private router: Router,private route:ActivatedRoute){
  }
  ngOnInit(): void{
  }

  course = [
    {'id':1, 'name':'Pickles', 'description': 'Authentic Andhra pickles made from guntur chilies.','image':'assets/img/pickles.jpg'},
    {'id':2, 'name':'Powders', 'description': 'Freshly Grounded powders with well balanced spices.','image':'assets/img/powder.jpg'},
    {'id':3, 'name':'Dals', 'description': 'Oragnically farmed Dals with rich protien and nutrients.','image':'assets/img/dals.jpg'},
    {'id':4, 'name':'Spices', 'description': 'Home-made spices with rich taste and color.','image':'assets/img/spices.jpg'}
  ]
}


