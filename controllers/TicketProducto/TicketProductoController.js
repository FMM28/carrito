import TicketProducto from "../../models/TicketProducto.js";
import Producto from "../../models/Producto.js";

const AccionMostrarTicketProducto = async (req,res) =>{
    const ticketProducto = await MisCompras.findAll({
        include:{
            model: TicketProducto
        },
        raw:true,
        nest:true
    });
    res.render("TicketProducto/ConsultarTicketProducto",{
        pagina:"Mi Ticket",
        miTicket: TicketProducto
    });
}

export default AccionMostrarTicketProducto