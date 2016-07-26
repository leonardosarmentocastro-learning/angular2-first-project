import { Component, OnInit } from '@angular/core';

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
        this.customers = this._customerService.getCustomers();
    }

}