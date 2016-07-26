import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'app-customers',
    templateUrl: 'customers.component.html',
    directives: [
        CustomerComponent
    ],
    providers: [
        CustomerService
    ]
})
export class CustomersComponent implements OnInit {
    // EXAMPLE 1:
    // customers: Observable<any[]>;
    
    // EXAMPLE 2:
    // customers: Promise<any[]>;
    
    // EXAMPLE 3:
    customers: any[];


    // ==> NOTE - INSTEAD OF THIS:
    // private _customerService: CustomerService;

    // constructor(customerService: CustomerService) { 
    //     this._customerService = customerService;
    // }
    // ==> DO THIS:
    constructor(private _customerService: CustomerService) {}

    ngOnInit() { 
        // do the work here, not on the constructor
        
        // EXAMPLE 4:
        // customers: any[];
        // ==> NOTE: Don't use the "async pipe" on your template here as you don't have a Observable of any[] type "customers" 
        this._customerService.getCustomers_RxObservables()
        .subscribe(
            // success function    
            (customers) => {
                // Here you can manipulate your "customers: any[]" array the way whatever you want to
                this.customers = customers;
            },
            // error function
            (err: any) => {
                console.log(err); // Don't do this, show the user a nice message
            }
        );


        // EXAMPLE 3:
        // customers: any[];
        // ==> NOTE: Don't use the "async pipe" on your template here as you don't have a Promise of any[] type "customers" 
        // this._customerService.getCustomers()
        // .then((customers) => {
        //     // Here you can manipulate your "customers: any[]" array the way whatever you want to
        //     this.customers = customers;
        // })
        // .catch((err: any) => {
        //     console.log(err); // Don't do this, show the user a nice message
        // });

        // EXAMPLE 2: 
        // customers: Promise<any[]>; way 
        // => NOTE: (use the "async pipe" on template and do this if you don't need to manipulate the returned json object)
        // this.customers = this._customerService.getCustomers()
        // .catch((err: any) => {
        //     console.log(err); // Don't do this, show the user a nice message
        // });

        // EXAMPLE 1:
        // customers: Observable<any[]>; way 
        // => NOTE: (use the "async pipe" on template and do this if you don't need to manipulate the returned json object)
        // this.customers = this._customerService.getCustomers()
        // .catch((err: any) => {
        //     console.log(err); // Don't do this, show the user a nice message
            
        //     // Now eat it but only if the message was communicated to the user
        //     return Observable.of([]);
        // });
    }

}