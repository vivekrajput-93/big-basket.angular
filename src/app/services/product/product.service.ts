import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }


  getAllProduct() {
    return this.http.get(Constant.API_URL + Constant.METHODS.GET_ALL_CATEGORY)
  }
 }
