import { Router } from 'express';
import { createPerson, getAllPeople, getPersonById, updatePerson, deletePerson } from '../controllers/personController';


//? Crea un nuevo router
const router = Router();

//? Ruta para crear una nueva persona.
router.post('/people', createPerson);

//? Ruta para obtener todas las personas
router.get('/people', getAllPeople);

//? Ruta para obtener una persona por ID
router.get('/people/:id', getPersonById);

//? Ruta para actualizar una persona por ID
router.put('/people/:id', updatePerson); //* Actualizar completamente
router.patch('/people/:id', updatePerson); //* Actualizar parcialmente

//? Ruta para eliminar una persona por ID
router.delete('/people/:id', deletePerson);

//? Exporta el router para que puede ser usado en otros lugares
export default router;