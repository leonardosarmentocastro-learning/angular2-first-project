import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {
    
    constructor() { }

    getCustomers() {
        let customers: Object[] = [
            { id: 1, name: "Leonardo"},
            { id: 2, name: "Sarmento"},
            { id: 3, name: "John"},
            { id: 4, name: "Kevin"},
            { id: 5, name: "Iago"}
        ];

        return customers;
    }

}