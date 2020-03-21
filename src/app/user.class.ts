export class User {

    id: number = 0;
    username: string = '';
    password: string = '';
    firstname: string = '';
    lastname: string = '';
    phone: string;
    email: string;
    isReviewer: boolean = false;
    isAdmin: boolean = false;

    constructor (){
        //typically dont need methods just mapping out the data
        //this is all fine except when creating a new one.  this is essentially
        //a model.  not reading from database, user types in
        //html is doing some binding to a user instance have to have a valid instance
        //to bind to.  have to create a valid instance of a user create so can 
        //bind to it.
        //have to deal with things that can not be null by default==number and boolean
        //initialize properties
    }
}
