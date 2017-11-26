import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';
import { isNumber } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  event: IProject;
  id: number;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _projectService: ProjectService) { }

  ngOnInit() {
      console.log(this._route.snapshot.paramMap.get('id'));
      this.id = +this._route.snapshot.paramMap.get('id');
      
      this._projectService.getEvent(this.id)
      .subscribe(project => {
        this.event = project;
      },
      error => this.errorMessage = <any>error); 
  }

}
