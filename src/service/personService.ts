import { Person } from '../models/Persona';

export class PersonService {
    private people: Person[] = [];
    private currentId = 1;

    //? Crear un nueva persona.

    createPerson(data: Omit<Person, 'id'>): Person {
        const newPerson: Person = { id: this.currentId++, ...data };
        this.people.push(newPerson);
        return newPerson;
    }

    //? Obtener todas las personas
    getAllPeople(): Person[] {
        return this.people;
    }

    //? Obtener una persona por ID
    getPersonById(id: number): Person | undefined {
        return this.people.find(person => person.id === id);
    }

    //? Actualizar la información de una persona por ID
    updatePerson(id: number, data: Partial<Person>): Person | undefined {
        const person = this.getPersonById(id);
        if (person) {
            Object.assign(person, data);
            return person;
        }

        return undefined;
    }

    //? Eliminar un persona por ID
    deletePersona(id: number): boolean {
        const index = this.people.findIndex(person => person.id === id);
        if (index !== -1) {
            this.people.splice(index, 1);
            return true;
        }
        return false;
    }
}