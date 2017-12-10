
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from '../services/data.service';

@Injectable()
export class UserService extends DataService {
  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/users', http);
   }
}
