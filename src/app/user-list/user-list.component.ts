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
  aa:any;
  constructor(
    private router: Router,
    private api: ApiService
  ) { }
  
  ngOnInit() {
    console.log("hii")
    /*this.getServiceCall('users', '');*/
    this.api.GetBatchDetails()
    .subscribe(data=>
      {
     //console.log("batchdetails"+JSON.stringify(data));
     this.dataSource = data;
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
        this.api.GetCommentbyparameter(value).subscribe(data=>{
          this.dataSource = data.items;
          console.log("get comment by"+JSON.stringify(data));
        });
         
          
      } else {
        console.log("else part")
        this.api.GetBatchDetails()
    .subscribe(data=>
      {
     //console.log("batchdetails"+JSON.stringify(data));
     this.dataSource = data;
      }
    );
      }
    }, 300);
  }
    
}
