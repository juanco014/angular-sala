import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Sala} from "../model/sala";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  private baseUrl: String = "https://gist.githubusercontent.com/juanco014/6d2cec7562639b6ba3081a47f23d079d/raw/a081c0164c898efeaa62c07cd3310cad7edca905/gistfile1.txt";
  constructor(private httpClient: HttpClient) {

  }

  getSala(): Observable<Sala> {
    return this.httpClient.get<Sala>(this.baseUrl );
  }

}
