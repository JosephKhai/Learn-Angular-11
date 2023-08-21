import { shareReplay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-learn-form',
  templateUrl: './learn-form.component.html',
  styleUrls: ['./learn-form.component.css']
})
export class LearnFormComponent implements OnInit {

  customerName: string = "Joseph";
  email: string;
  password: string;
  data$: Observable<any>

  constructor(private httpClient: HttpClient) {

    //npm install json-server
    this.data$ = httpClient.get("http://localhost:3000/customers")
      .pipe(
        tap(console.log),
        shareReplay()
      );
  };

  ngOnInit(): void {
    this.data$.subscribe();
    this.data$.subscribe();
    this.data$.subscribe();
  }

  onSubmit(form: NgForm) {
    //console.log(form.value);
    //this.httpClient.post("http://localhost:3000/customers", form.value).subscribe();
  }

  onDelete() {
    //this.httpClient.delete("http://localhost:3000/customers/3").subscribe();
  }

}
