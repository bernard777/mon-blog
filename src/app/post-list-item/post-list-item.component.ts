import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() createAt: Date;
  @Input() PostLoveIts: number;

  constructor() {
    this.createAt = new Date();
   }

  ngOnInit() {
  }

  onLoveIts() {
    this.PostLoveIts++ ;
    console.log(this.PostLoveIts);
  }

  onDontLoveIts() {
    this.PostLoveIts--;
    console.log(this.PostLoveIts);
  }

  getColor() {
    if (this.PostLoveIts < 0) {
      return 'red';
    } else if (this.PostLoveIts > 0) {
      return 'green';
    }
  }

}

