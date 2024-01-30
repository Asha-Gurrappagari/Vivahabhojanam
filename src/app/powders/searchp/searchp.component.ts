import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css']
})
export class SearchpComponent implements OnInit {
  searchPowder=''
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchPowder)
      this.searchPowder= params.searchPowder;
    });
  }
  ngOnInit(): void {
    
  }
  search(powder:string){
    if(powder)
    this.router.navigateByUrl('/searchp/'+powder);
  }
}