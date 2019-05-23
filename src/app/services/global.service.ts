import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  url = 'https://api.github.com/users';

  urll= 'https://api.github.com/search/users';

  constructor() { }
}
