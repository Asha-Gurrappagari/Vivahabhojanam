import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from '../Menu/course.component';
import { JoinnowComponent } from '../joinnow/joinnow.component';
import { RouterModule , Route, Router, ActivatedRoute,ParamMap} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
    constructor(private router: Router,private route:ActivatedRoute){

    }
   ngOnInit(): void{}

   getMenu(){
    this.router.navigate(['/course'],{relativeTo:this.route});
   }
   joinNow(){
    this.router.navigate(['/join'],{relativeTo:this.route});
   }
   onRefresh(){
    this.router.navigate(['/login'],{relativeTo:this.route});
   }
}
  