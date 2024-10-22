const res = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM alumnos', (err, alumnos) => { // Cambié 'customers' a 'alumnos'
            if (err) {
                return res.json(err);
            }

            res.render('customers', { // Mantiene la vista de 'customers'
                data: alumnos
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO alumnos set ?', [data], (err, alumno) => { // Cambié 'customer' a 'alumnos'
            if (err) {
                return res.json(err);
            }

            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM alumnos WHERE id = ?', [id], (err, rows) => { // Cambié 'customer' a 'alumnos'
            if (err) {
                return res.json(err);
            }

            res.redirect('/');
        });
    });
};

controller.edit = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM alumnos WHERE id = ?', [id], (err, alumno) => { // Cambié 'customer' a 'alumnos'
            if (err) {
                return res.json(err);
            }

            res.render('customer_edit', { // Mantiene la vista de 'customer_edit'
                data: alumno[0]
            });
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newAlumno = req.body; // Cambié 'newCustomer' a 'newAlumno'
    
    req.getConnection((err, conn) => {
        conn.query('UPDATE alumnos set ? WHERE id = ?', [newAlumno, id], (err, rows) => { // Cambié 'customer' a 'alumnos'
            if (err) {
                return res.json(err);
            }
            
            res.redirect('/');
        });
    });
};

module.exports = controller;
