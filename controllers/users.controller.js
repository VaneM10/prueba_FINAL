const {response, request} = require('express');

const viewPlayers = async (req = request, res = response) => {
    res.json({
        'msg':'exito'
    })
};

const futbolistasGet = (req = request, res = response) => {

    //Ejemplo de desestructuración de variables por parte del query
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    //ejemplo de respuesta tipo json
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const futbolistasPost = (req, res = response) => {

    const { nombre, celular} = req.body;

    
    res.status(201).json({
        msg: 'post API - futbolistasPost',
        nombre, 
        celular
    });
}

const futbolistasPut = (req, res = response) => {

    
    const { id } = req.params;

    //ejemplo de respuesta del body
    res.status(201).json({
        msg: 'put API - futbolistasPut',
        id
    });
}

const futbolistasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - futbolistasPatch'
    });
}

const futbolistasDelete = (req, res = response) => {
    res.status(410).json({
        msg: 'delete API - futbolistasDelete'
    });
}


module.exports = {
    futbolistasGet,
    futbolistasPost,
    futbolistasPut,
    futbolistasPatch,
    futbolistasDelete,
    viewPlayers,
}