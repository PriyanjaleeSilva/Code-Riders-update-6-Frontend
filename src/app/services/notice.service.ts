import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Notice } from '../shared/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  selectedNotice: Notice;
  notices: Notice[];
  readonly baseURL = 'http://localhost:3000/tutor_dashboard'; //backend 

  constructor(private http : HttpClient) { }

  postNotice(ntc : Notice){
    return this.http.post(this.baseURL, ntc);
}

getNoticeList() {
  return this.http.get(this.baseURL);
}

putNotice(ntc: Notice) {
  return this.http.put(this.baseURL + `/${ntc._id}`, ntc);
}

deleteNotice(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}
}
