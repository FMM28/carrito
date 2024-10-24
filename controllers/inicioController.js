const inicio = (req,res)=>{
    const carrito = req.session.carrito || [];
    res.render('index',{
        carrito: carrito
    })
}

export {inicio}