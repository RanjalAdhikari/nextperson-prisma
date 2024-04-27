export interface Person {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    dob: Date | null; // Adding dob field with type Date | null
}
