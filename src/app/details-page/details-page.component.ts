import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  param_id: any;
  userData: any = {
    name: '',
    avatar_url: ''
  };
  constructor(
    private router: Router,
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    this.param_id = this.activatedRoute.snapshot.paramMap.get('login');
    this.getServiceCall(`users`, `/${this.param_id}`);
  }

  getServiceCall(url, params) {
    this.api.getServiceCall(url, params).subscribe(
      res => {
        this.userData = res;
      },
      error => {
        console.log(error);
      }
    );
  }

  // call photos route
  getPhotos(row) {
    this.router.navigate(['/photos', row.id]);
  }

  // go back for previous route
  goBack() {
    this._location.back();
  }

}
