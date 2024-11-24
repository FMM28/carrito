import express from 'express';
import {} from '../controllers/admin/adminController.js'
import db from '../config/db.js';

const router = express.Router()

// router.get('/',inicio)

router.get('/administrador/tickets', (req, res) => {
    const page = parseInt(req.query.page) || 1; // Página actual
    const limit = 5; // Tickets por página
    const offset = (page - 1) * limit;
  
    const countQuery = 'SELECT COUNT(*) AS total FROM tickets';
    const ticketsQuery = 'SELECT * FROM tickets LIMIT ? OFFSET ?';
  
    db.query(countQuery, (err, countResult) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error en el servidor');
      }
  
      const totalTickets = countResult[0].total;
      const totalPages = Math.ceil(totalTickets / limit);
  
      db.query(ticketsQuery, [limit, offset], (err, tickets) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error en el servidor');
        }
  
        // Renderiza la vista desde la subcarpeta Admin
        res.render('Admin/tickets', {
          tickets,
          currentPage: page,
          totalPages,
        });
      });
    });
  });
  
  // Ruta para eliminar un ticket
  router.post('administrador/tickets/delete/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = 'DELETE FROM tickets WHERE id = ?';
  
    db.query(deleteQuery, [id], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al eliminar el ticket');
      }
  
      console.log(`Ticket con ID ${id} eliminado correctamente.`);
      res.redirect('/tickets');
    });
  });
export default router