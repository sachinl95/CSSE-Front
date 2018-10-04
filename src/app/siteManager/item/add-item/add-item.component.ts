import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';
import { CustomValidators } from '../../validator/validators';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  //name = new FormControl('');
  regiForm: FormGroup;  
  itemName:string='';
  categoryId:string=''; 
  price:number=null;
  deliveryInformation:string='';
  name:string='';  
  foodValue:string='';
  // Address:string='';  
  // DOB:Date=null;  
  // Gender:string='';  
  // Blog:string='';  
  // Email:string='';  
  IsAccepted:number=0;  
  
  constructor(private fb: FormBuilder) { 
    //console.log(CustomValidators.validateCharacters);
    this.regiForm = fb.group({  
      'itemName' : [null, Validators.required],  
      'categoryId' : [null, Validators.required],  
      'price' : [null, Validators.required],  
      'deliveryInformation' : [null, Validators.required],
      // 'Gender':[null, Validators.required],  
      // 'Blog':[null, Validators.required],  
      // 'Email':[null, Validators.compose([Validators.required,Validators.email])],  
      // 'IsAccepted':[null]  
    });

   }

  //  onChange(event:any)  
  //   {  
  //     if (event.checked == true) {  
  //       this.IsAccepted = 1;  
  //     } else {  
  //       this.IsAccepted = 0;  
  //     }  
  //   }  

  // Executed When Form Is Submitted  
  onFormSubmit(form:NgForm)  
  {  
    console.log(this.IsAccepted);
    if(this.regiForm.valid){
      console.log(form);
    }
    else{

    }
      
  } 

  ngOnInit() {
  }

  

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];


}

export interface Food {
  value: string;
  viewValue: string;
}
