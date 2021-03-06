const jwt = require('jsonwebtoken');

// =======================
// Verificar Token
// =======================
let verificaToken = (req, res, next) => {
    let token = req.get('Authorization');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Authorization no valido'
                }
            })
        }

        req.usuario = decoded.usuario;
        next();
    });
};

// =======================
// Verificar Admin Role
// =======================
let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.status(401).json({
            ok: false,
            err: {
                message: 'El Usuario no es Administrador'
            }
        })
    }
};

module.exports = {
    verificaToken,
    verificaAdmin_Role
};