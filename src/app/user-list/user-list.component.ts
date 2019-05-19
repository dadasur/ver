import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'avatar_url', 'login', 'more'];
  dataSource = [
  ];
  heroes: any;
  searchUser: any;
  callApiTime: any;
  constructor(
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getServiceCall('users', '');
  }

  getServiceCall(url, params) {
    this.api.getServiceCall(url, params).subscribe(
      res => {
        if (url === 'users') {
          this.dataSource = res;
        } else if (url === 'search') {
          this.dataSource = res.items;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getSingleUser(row) {
    this.router.navigate(['/details', row.login]);
  }

  search(value) {
    clearTimeout(this.callApiTime);
    this.callApiTime = setTimeout(() => {
      console.log(value);
      if (value) {
        this.getServiceCall('search', `?q=${value}`);
      } else {
        this.getServiceCall('users', '');
      }
    }, 300);
  }

}
