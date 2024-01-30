import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.css']
})
export class SearchsComponent implements OnInit{
  searchSpice=''
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchSpice)
      this.searchSpice=params.searchSpice;
    })
  }
  ngOnInit(): void {
  }
  search(spice:string){
    if(spice)
    this.router.navigateByUrl('/searchs/'+spice);
  }
}
