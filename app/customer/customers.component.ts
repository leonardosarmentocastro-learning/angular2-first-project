import { Component, OnInit } from '@angular/core';

import { CustomerComponent } from './customer.component';

@Component({
    selector: 'app-customers',
    templateUrl: 'app/customer/customers.component.html',
    directives: [
        CustomerComponent
    ]
})
export class CustomersComponent implements OnInit {
    customers: Object[] = [
        { id: 1, name: "Leonardo"},
        { id: 2, name: "Sarmento"},
        { id: 3, name: "John"},
        { id: 4, name: "Kevin"},
        { id: 5, name: "Iago"}
    ];

    constructor() { }

    ngOnInit() { }

}