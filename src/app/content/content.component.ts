import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  currentUser: String = null;
  headingStr: String = null;
  contentStr: String = null;
  showCard = true;
  editCard = false;

  public isCollapse = false;
  constructor() {
    this.currentUser = localStorage.getItem('currentUser');
   }

  ngOnInit() {
  }

  addSection(event) {
    event.preventDefault();
    const target = event.target;
    const heading = target.querySelector('#heading').value;
    const content = target.querySelector('#content').value;
    this.headingStr = heading;
    this.contentStr = content;
    this.editCard = false;
    this.showCard = true;
  }

  editSection() {
    this.editCard = true;
    this.showCard = false;
  }

  cancelAdd() {
    this.editCard = false;
    this.showCard = true;
  }
}
