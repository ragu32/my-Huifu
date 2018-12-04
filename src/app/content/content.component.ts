import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private str: String;
  public isCollapse = false;
  constructor() { }

  ngOnInit() {
  }

}
