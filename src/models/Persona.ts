export class Person {
    id: Number;
    fullName: String;
    dateOfBirth: Date;
    bodyWeight: number;
    height: number;
    gender: 'Male' | 'Female' | 'Non-binary' | 'Other';
    country: string;
    city: string;
    constructor(
        id: Number,
        fullName: String,
        dateOfBirth: Date,
        bodyWeight: number,
        height: number,
        gender: 'Male' | 'Female' | 'Non-binary' | 'Other',
        country: string,
        city: string,
    ) {
        this.id = id
        this.fullName = fullName
        this.dateOfBirth = dateOfBirth
        this.bodyWeight = bodyWeight
        this.height = height
        this.gender = gender
        this.country = country
        this.city = city
    }
}