exports.getLogin = (request, response, next) =>{
    response.render('login', {
        titulo: 'Login'
    }); 
};

exports.postLogin = (request, response, next) =>{
    request.session.isLoggedin = true;
    response.redirect('/tienda'); 
};

exports.getTienda = (request, response, next) =>{
    response.render('tienda', {
        titulo: 'La tienda de joako',
    }); 
};
