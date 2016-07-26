import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: 
    `
    <h1>{{title}}</h1>
    <div [style.color]="nameColor">
        Hello {{name}}
    </div>
    <button (click)="changeNameColor()"> Change name color </button>
    `
})
export class AppComponent { 
    // [ ] PROPERTY BINDING - one way binding from the component to the dom
    // ( ) EVENT BINDING - from the dom to the component
    // NOTE: both auto refers to the component scope

    title = "Customer App";
    name = "Leonardo";
    nameColor = "red";

    changeNameColor() {
        this.nameColor = (this.nameColor === "red" ? "blue" : "red");
    }
}
