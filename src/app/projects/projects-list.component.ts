import { Component, OnInit } from '@angular/core';
import { ProjectService } from './shared/project.service';
import { IProject } from './shared/project.model';
@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  projects: IProject[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getEvents();
  }

}
