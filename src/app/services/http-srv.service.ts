import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LabelSrvService} from './label-srv.service';

@Injectable({
  providedIn: 'root'
})
export class HttpSrvService {
  constructor(private http: HttpClient, private lableStv: LabelSrvService) { }
  setHeader(uploadFile: boolean = false) {
    const token = localStorage.getItem('token') ? 'Token ' + localStorage.getItem('token') : '';
    const header = new HttpHeaders();
    if (uploadFile) {
      header.set('Content-Type', 'multipart/form-data');
    }
    return header.set('Authorization', token);
  }
  httpGet(urlAddress: string, params= null) {
    return this.http.get(this.lableStv.HOST_SERVER_DOMAIN + urlAddress, {params: params, headers: this.setHeader()});
  }
  httpPost(urlAddress: string, data, params= null) {
    return this.http.post(this.lableStv.HOST_SERVER_DOMAIN + urlAddress, data, {params: params, headers: this.setHeader()});
  }
  httpPut(urlAddress: string, data, params= null, uploadFile: boolean = false) {
    return this.http.put(this.lableStv.HOST_SERVER_DOMAIN + urlAddress, data, {params: params, headers: this.setHeader(uploadFile)});
  }
}
