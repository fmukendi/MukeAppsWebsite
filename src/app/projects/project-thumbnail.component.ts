import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-thumbnail',
  templateUrl: './project-thumbnail.component.html',
  styleUrls: ['./project-thumbnail.component.scss']
})
export class ProjectThumbnailComponent implements OnInit {
  @Input() event:any;

  constructor() { }

  ngOnInit() {
  }
  
  getStartTimeStyle() {
    if (this.event && this.event.time === '8:00 am')
      return {color: '#003300', 'font-weight': 'bold'}
    return {}
  }


}
