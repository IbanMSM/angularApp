import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  @Input() colorNombre:String;

  test1:Number = Math.floor(Math.random() * 100);
  constructor() { }

  ngOnInit() {
  }

}
