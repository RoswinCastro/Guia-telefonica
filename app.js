const async = require('async');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

//MODIFICAR DATOS DE SER NECESARIO.
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'guia_telefonica_final',
});


function mostrarTodosLosDatos(req, res) {
    let data = {};

    pool.query('SELECT * FROM Empresa', (err, empresas) => {
        if (err) {
            res.status(500).json({ error: 'Error al obtener los datos de la tabla Empresa' });
            return;
        }
        data.empresas = empresas;

    
        pool.query('SELECT * FROM Departamento', (err, departamentos) => {
            if (err) {
                res.status(500).json({ error: 'Error al obtener los datos de la tabla Departamento' });
                return;
            }
            data.departamentos = departamentos;

            
            pool.query('SELECT * FROM Municipio', (err, municipios) => {
                if (err) {
                    res.status(500).json({ error: 'Error al obtener los datos de la tabla Municipio' });
                    return;
                }
                data.municipios = municipios;

             
                pool.query('SELECT * FROM Lugar', (err, lugares) => {
                    if (err) {
                        res.status(500).json({ error: 'Error al obtener los datos de la tabla Lugar' });
                        return;
                    }
                    data.lugares = lugares;

                   
                    pool.query('SELECT * FROM Telefono', (err, telefonos) => {
                        if (err) {
                            res.status(500).json({ error: 'Error al obtener los datos de la tabla Telefono' });
                            return;
                        }
                        data.telefonos = telefonos;

                      
                        pool.query('SELECT * FROM Zona', (err, zonas) => {
                            if (err) {
                                res.status(500).json({ error: 'Error al obtener los datos de la tabla Zona' });
                                return;
                            }
                            data.zonas = zonas;

                            
                            res.json(data);
                        });
                    });
                });
            });
        });
    });
}


app.get('/zonas', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Zona', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post('/zonas', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Zona SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Zona with the name: ${params.Nombre} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});

app.get('/departamentos', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Departamento', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post('/departamentos', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Departamento SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Departamento with the name: ${params.Nombre} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});

app.get('/municipios', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Municipio', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post('/municipios', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Municipio SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Municipio with the name: ${params.Nombre} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});

app.get('/empresas', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Empresa', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post('/empresas', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Empresa SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Empresa with the name: ${params.Nombre} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});

app.get('/lugares', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Lugar', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});

app.post('/lugares', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Lugar SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Lugar with the name: ${params.Nombre} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});

app.get('/telefonos', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM Telefono', (err, rows) => {
            connection.release();
            if (!err) {
                res.send(rows);
            } else {
                console.log(err);
            }
        });
    });
});
app.delete('/empresa/:id', (req, res) => {
    const idEmpresa = req.params.id;

    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).json({ error: 'Error de conexión a la base de datos' });
            return;
        }

        connection.beginTransaction((err) => {
            if (err) {
                res.status(500).json({ error: 'Error al iniciar la transacción' });
                connection.release();
                return;
            }

            connection.query('DELETE FROM empresa WHERE codigo_empresa = ?', idEmpresa, (err, result) => {
                if (err) {
                    connection.rollback(() => {
                        if (err.code === 'ER_ROW_IS_REFERENCED_2') {
                            const queries = [
                                'DELETE FROM lugar WHERE codigo_empresa = ?',
                                'DELETE FROM telefono WHERE codigo_empresa = ?'
                            ];

                            async.eachSeries(queries, (query, callback) => {
                                connection.query(query, idEmpresa, (err, result) => {
                                    if (err) {
                                        connection.rollback(() => {
                                            callback(err);
                                        });
                                    }
                                    callback();
                                });
                            }, (err) => {
                                if (err) {
                                    connection.rollback(() => {
                                        res.status(500).json({ error: 'Error al eliminar relaciones' });
                                        connection.release();
                                    });
                                    return;
                                }

                                connection.query('DELETE FROM empresa WHERE codigo_empresa = ?', idEmpresa, (err, result) => {
                                    if (err) {
                                        connection.rollback(() => {
                                            res.status(500).json({ error: 'Error al eliminar la empresa' });
                                            connection.release();
                                        });
                                        return;
                                    }

                                    connection.commit((err) => {
                                        if (err) {
                                            connection.rollback(() => {
                                                res.status(500).json({ error: 'Error al confirmar la transacción' });
                                                connection.release();
                                            });
                                            return;
                                        }

                                        console.log('Empresa y sus relaciones eliminadas con éxito.');
                                        res.json({ message: `Empresa y sus relaciones con ID ${idEmpresa} han sido eliminadas.` });
                                        connection.release();
                                    });
                                });
                            });
                        } else {
                            res.status(500).json({ error: 'Error al eliminar la empresa' });
                            connection.release();
                        }
                    });
                } else {
                    connection.commit((err) => {
                        if (err) {
                            connection.rollback(() => {
                                res.status(500).json({ error: 'Error al confirmar la transacción' });
                                connection.release();
                            });
                            return;
                        }

                        console.log('Empresa eliminada con éxito.');
                        res.json({ message: `Empresa con ID ${idEmpresa} ha sido eliminada.` });
                        connection.release();
                    });
                }
            });
        });
    });
});

app.post('/actualizar', (req, res) => {
    const { tabla, id, newData } = req.body;
    if (!tabla || !id || !newData) {
        res.status(400).json({ error: 'Se requiere especificar la tabla, el ID y los nuevos datos para actualizar.' });
        return;
    }

    pool.getConnection((err, connection) => {
        if (err) {
            res.status(500).json({ error: 'Error al conectar con la base de datos.' });
            return;
        }

        const query = `UPDATE ${tabla} SET ? WHERE ID = ?`;
        connection.query(query, [newData, id], (err, result) => {
            connection.release();
            if (err) {
                res.status(500).json({ error: 'Error al actualizar el registro.' });
                return;
            }
            res.json({ message: `Registro actualizado en la tabla ${tabla}.` });
        });
    });
});


app.post('/telefonos', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err;
        const params = req.body;
        connection.query('INSERT INTO Telefono SET ?', params, (err, rows) => {
            connection.release();
            if (!err) {
                res.send(`Telefono with the number: ${params.Telefono} has been added.`);
            } else {
                console.log(err);
            }
        });
    });
});
app.get('/mostrar', mostrarTodosLosDatos);

app.listen(port, () => console.log(`Listening on port ${port}`));
