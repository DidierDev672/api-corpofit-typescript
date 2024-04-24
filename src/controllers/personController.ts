import { Request, Response } from 'express';
import { PersonService } from '../service/personService';

//? Crear una instancia del servicio
const personService = new PersonService();

//? Controlador para crear una nueva persona
export const createPerson = (req: Request, res: Response) => {
    try {
        const personData = req.body; //* Obtener datos del cuerpo de la solicitud
        const newPerson = personService.createPerson(personData);
        res.status(201).json(newPerson); //* Devolver el recurso creado con código 201
    } catch (error) {
        res.status(500).json({ error: 'Error creating person' });
    }
}

//? Controlador para obtener todas las personas
export const getAllPeople = (req: Request, res: Response) => {
    try {
        const people = personService.getAllPeople(); // Obtener todas las personas
        res.json(people); //* Devolver todas las personas como JSON
    } catch (error) {
        res.status(500).json({ error: 'Error fetching people' });
    }
};

//? Controlador para obtener una persona por ID
export const getPersonById = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10); //* Obtener el ID de la URL
        const person = personService.getPersonById(id);

        if (person) {
            res.json(person); //* Devolver la persona encontrada
        } else {
            res.status(404).json({ error: 'Person not found' }); //* Devolver error si no se encuentra
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching person' });
    }
};

//? Controlador para actualizar una persona por ID
export const updatePerson = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10); //* Obtener el ID de la URL
        const personData = req.body; //* Obtener datos actualizados del cuerpo de la solicitud
        const updatedPerson = personService.updatePerson(id, personData);

        if (updatedPerson) {
            res.json(updatedPerson); //* Devolver la persona actualizada
        } else {
            res.status(404).json({ error: 'Person not found' }); //* Devolver error si no se encuentra
        }
    } catch (error) {
        res.status(500).json({ error: 'Error updating person' });
    }
};

//? Controlador para eliminar una persona por ID
export const deletePerson = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10); //* Obtener el ID de la URL
        const deleted = personService.deletePersona(id);

        if (deleted) {
            res.status(204).end(); //* Devolver código 204 si la eliminación fue exitosa
        } else {
            res.status(404).json({ error: 'Person not found' }); //* Devolver error si no se encuentra
        }
    } catch (error) {
        res.status(500).json({ error: 'Error deleting person' });
    }
};