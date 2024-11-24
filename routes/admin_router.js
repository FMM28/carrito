import express from 'express';
import {} from '../controllers/admin/adminController.js'
import db from '../config/db.js';
import Ticket from '../models/Ticket.js';

const router = express.Router()

// router.get('/',inicio)

// Ruta para listar tickets con paginación
router.get('/tickets', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const offset = (page - 1) * limit;
  
    try {
      const { count, rows: tickets } = await Ticket.findAndCountAll({
        limit,
        offset,
      });
  
      const totalPages = Math.ceil(count / limit);
  
      res.render('Admin/tickets', {
        tickets,
        currentPage: page,
        totalPages,
      });
    } catch (error) {
      console.error('Error al obtener los tickets:', error);
      res.status(500).send('Error en el servidor');
    }
  });
  
export default router