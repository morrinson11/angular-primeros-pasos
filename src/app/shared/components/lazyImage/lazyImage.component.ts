import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyImage',
  templateUrl: './lazyImage.component.html',
  styleUrls: ['./lazyImage.component.css']
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!:string;

  @Input()
  public alt:string = '';

  public hasLoaded:boolean = false;

  onLoad(){
    console.log('Image Loaded');
    this.hasLoaded = true;
  }

  ngOnInit(): void {
    if(!this.url) throw new Error('URL Property is Required');
  }
}