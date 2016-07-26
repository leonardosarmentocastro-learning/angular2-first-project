import { Component } from '@angular/core';
import { CustomersComponent } from './customer/customers.component';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [
        CustomersComponent
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
