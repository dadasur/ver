import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'https://api.github.com/';

  constructor() { }
}
