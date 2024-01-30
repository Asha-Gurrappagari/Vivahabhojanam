import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  @Input()
  foodPagetags?:string[];
  @Input()
  justifyContent:string = 'center';
  tags?:Tag[];
  constructor(private api:FoodService){
  }
  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags=this.api.getAllTags();
  }
}
