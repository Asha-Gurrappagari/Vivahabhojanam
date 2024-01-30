import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchd',
  templateUrl: './searchd.component.html',
  styleUrls: ['./searchd.component.css']
})
export class SearchdComponent implements OnInit{
  searchDal=''
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchDal)
      this.searchDal=params.searchDal;
    })
  }
ngOnInit(): void {
  
}
search(dal:string){
  if(dal)
  this.router.navigateByUrl('/searchd/'+dal);
}

}
