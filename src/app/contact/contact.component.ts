import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
interface ContactForm {
  "name": string,
  "checkAdult": boolean,
  "departament": string,
  "comment": string
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id!: string;

  model = {
    name: "",
    checkAdult: false,
    departament: "",
    comment: "..."
  }

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    this.route.params.subscribe(params: Params) => {
        this.id = params['id'];
    }
    */
  }

  onSubmit(form: any): void {
console.log("Form values:", form);
    }

}
