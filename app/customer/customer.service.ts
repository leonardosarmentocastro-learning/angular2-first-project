import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Add everything about RxJs
// import "rxjs/Rx";
// Add just a few operators of RxJs
// import "rxjs/add/operators/map";

const URL_CUSTOMER = "app/customers.json";

@Injectable()
export class CustomerService {
    
    constructor(private _http: Http) { }

    getCustomers() {
        // With observables you can get a stream of just a tinny bit of information you want
        // As you don't want to the response to get the code, body or whatever so, you just want the json
        // There it is
        return this._http.get(URL_CUSTOMER)
            .map((response: Response) => response.json() );
    }

}