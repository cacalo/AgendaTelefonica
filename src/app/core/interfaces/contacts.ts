export interface Contact {
    firstName: string,
    lastName: string,
    phoneNumber: string,
}

export const defaultContact:Contact = {
    firstName: "First name",
    lastName: "Last Name",
    phoneNumber: "+5412345678"
}



export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ContactJsonPlaceholder {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}