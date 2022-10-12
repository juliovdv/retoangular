import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!:FormGroup;
  //myField = new FormControl();
  name!: string;
  departaments: string[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute)
    { }

  ngOnInit(): void {
    this.departaments = this.route.snapshot.data['departaments'];
    this.contactForm = this.initForm();
    //this.onPathValue();
    //this.onSetValue();
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      }
    );
  }

  onSubmit():void{
    console.log('Form->', this.contactForm.value);


  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: "pedro" });
  }


  onSetValue(): void {
   this.contactForm.setValue({ comment: "pedro" });
  }


  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: ['', [Validators.required]],
      departament: [''],
      comment: ['', [Validators.required]],
    })
  }
}
