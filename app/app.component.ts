import { Component } from '@angular/core';
import { CustomerComponent } from './customer/customer.component';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [
        CustomerComponent
    ]
})
export class AppComponent { 
    // [ ] PROPERTY BINDING - one way binding from the component to the dom
    // ( ) EVENT BINDING - from the dom to the component
    // NOTE: both auto refers to the component scope

    title = "Customer App";
    name = "Leonardo";
    color = "green";
    customers: Object[] = [
        { id: 1, name: "Leonardo"},
        { id: 2, name: "Sarmento"},
        { id: 3, name: "John"},
        { id: 4, name: "Kevin"},
        { id: 5, name: "Iago"}
    ];
    view: Object = {
        alert() {
            alert("test");
        }
    };


    changeColor() {
        this.color = (this.color === "green" ? "red" : "green");
    }
}
