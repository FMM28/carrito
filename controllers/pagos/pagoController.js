import Pago from "../../models/Pago.js";
import Ticket from "../../models/Ticket.js";

const procesarPago = async (req, res) => {
  const { id_ticket, forma_pago, pago } = req.body;

  try {
    // Validar que los datos requeridos estén presentes
    if (!id_ticket || !forma_pago || !pago) {
      req.flash("error", "Todos los campos son obligatorios.");
      return res.redirect(req.get("Referer"));
    }

    // Validar que el monto del pago sea positivo
    if (pago <= 0) {
      req.flash("error", "El monto del pago debe ser mayor a cero.");
      return res.redirect(req.get("Referer"));
    }

    // Verificar si el ticket existe
    const ticket = await Ticket.findByPk(id_ticket);
    if (!ticket) {
      req.flash("error", "El ticket no existe.");
      return res.redirect(req.get("Referer"));
    }

    // Verificar si ya existe un pago asociado al ticket
    const pagoExistente = await Pago.findOne({ where: { id_ticket } });
    if (pagoExistente) {
      req.flash("error", "El ticket ya tiene un pago registrado.");
      return res.redirect(req.get("Referer"));
    }

    // Registrar el pago en la base de datos
    await Pago.create({
      id_ticket,
      forma_pago,
      pago,
    });

    req.flash("success", "Pago registrado exitosamente.");
    res.redirect("/pagos"); // Redirigir a la vista de pagos o a donde desees
  } catch (error) {
    console.error("Error al procesar el pago:", error);
    req.flash("error", "Ocurrió un error al procesar el pago.");
    res.redirect(req.get("Referer"));
  }
};

export {procesarPago}