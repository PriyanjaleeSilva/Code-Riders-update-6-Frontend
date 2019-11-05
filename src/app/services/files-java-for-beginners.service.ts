import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Files } from '../shared/files.model';

@Injectable({
  providedIn: 'root'
})
export class FilesJavaForBeginnersService {

  selectedFiles: Files;
  files: Files[];
  
 

  constructor(private http:HttpClient) { }

  getJavaFileList(course) {
    return this.http.get('http://localhost:3000/java_files/filenames/' + course);
  }

  deleteFile(_id: string) {
    return this.http.delete('http://localhost:3000/java_files' + `/${_id}`);
  }

 

}
