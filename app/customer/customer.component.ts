import { Component, OnInit, Input } from '@angular/core';

// Note that the "export" statement is very important so you can use it externaly on others components
@Component({
    selector: 'app-customer',
    templateUrl: 'app/customer/customer.component.html'
})
export class CustomerComponent implements OnInit {
    // This @Input decorator tells that the "app-customer" component
    // Expects a property called "customer" to be fullfiled when using the component
    // Example:
    // <app-customer [customer]="whateverTheNameOfYourVariable"></app-customer>
    @Input() 
    customer: { id: number, name: string };

    constructor() { }

    ngOnInit() { }
}