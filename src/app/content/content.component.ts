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
  headingEdit: String = null;
  contentEdit: String = null;
  headingArr: Array<String> = [];
  contentArr: Array<String> = [];
  showCard = true;
  editCard = false;

  public isCollapse = false;
  constructor() {
    this.currentUser = localStorage.getItem('currentUser');
   }

  ngOnInit() {
  }

  createSection(event) {
    event.preventDefault();
    const target = event.target;
    const heading = target.querySelector('#heading').value;
    const content = target.querySelector('#content').value;
    // this.headingStr = heading;
    this.contentStr = content;
    this.headingArr.push(heading);
    this.contentArr.push(content);
    this.editCard = false;
    this.showCard = true;
  }

  editSection(heading, content) {
    this.editCard = true;
    this.showCard = false;
    this.headingStr = heading;
    this.contentStr = content;
  }

  cancelAdd() {
    this.editCard = false;
    this.showCard = true;
    // this.modalService.
  }

  addSection() {
    this.editCard = true;
    this.showCard = false;
    this.headingStr = null;
    this.contentStr = null;
  }
}
