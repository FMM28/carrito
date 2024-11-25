const inicio = (req,res)=>{
    const carrito = req.session.carrito || [];
    res.render('index',{
        csrf: req.csrfToken(),
        carrito: carrito
    })
}

export {inicio}