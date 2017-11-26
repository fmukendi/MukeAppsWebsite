import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProject } from './project.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class ProjectService {

  
  private _projectsUrl = './api/projects/projects.json';

  constructor(private _http: HttpClient) { 


  }
  getEvents(): Observable<IProject[]> {
    return this._http.get<IProject[]>(this._projectsUrl)
              .do(data => console.log('All: ' + JSON.stringify(data)))
              .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }
}
