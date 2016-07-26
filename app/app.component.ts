import { Component } from '@angular/core';

// ==> NOTE: instead of importing each thing(compoenent, service or whatever) about the customer
// import { CustomersComponent } from './customer/customers.component';
// import { CustomerService } from './customer/customer.service';
// ==> NOTE:  I can import a hole "barrel" of those things(I can even remove "index" because it's a convention and it would still works):
// import { CustomersComponent, CustomerService } from "./customer";
import { CustomersComponent, CustomerService } from "./customer/index";


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: "app.component.html",
    directives: [
        CustomersComponent
    ], 
    providers: [
        CustomerService
    ]
})
export class AppComponent { 
    // [ ] PROPERTY BINDING - one way binding from the component to the dom
    // ( ) EVENT BINDING - from the dom to the component
    // NOTE: both auto refers to the component scope

    title = "Customer App";
    name = "Leonardo";
    color = "green";
    view: Object = {
        alert() {
            alert("test");
        }
    };

    changeColor() {
        this.color = (this.color === "green" ? "red" : "green");
    }
}
