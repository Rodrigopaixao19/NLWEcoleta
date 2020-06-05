import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        // retornar as info do banco do jeito que eu quero(serialização de dados), transformar para um novo formato
        const serializedItems = items.map(item => {
            return { 
                id: item.id,
                title: item.title,
                image_url: /**/`yourIpHere:3333/uploads/${item.image}`,
             };
        })
      return response.json(serializedItems);
     }
}

export default ItemsController;