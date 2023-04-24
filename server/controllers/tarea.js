var mongoose = require('mongoose');
var Tarea = require('../models/tarea');

exports.list_all_tareas = function(req, res) {
    Tarea.find({})
    .then(tareas => {
        if(tareas.length) return res.status(200).send({tareas})
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(err => res.status(500).send({err}))
}

exports.create_tarea = function(req, res) {
        let tarea = new Tarea(req.body);
        tarea.save()
            .then(tarea => 
                res.status(201).send({tarea})
            ).catch(err => res.status(500).send({err}))
        
    };


exports.read_tarea = async function(req, res) {
         await Tarea.find( { _id : req.params.tareaId } )
        .then(tareas => {
            if(tareas.length) return res.status(200).send({tareas})
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(err => res.status(500).send({err}))
    };

exports.update_tarea = async function(req, res) {
    const opts = { new: true };
    console.log(req.body);
    await Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body, opts )
    .then(tareas => {
        if(tareas.length) 
            //console.log(tareas);
            return res.status(200).send({tareas})
        //console.log(tareas);
        return res.status(204).send({message: 'NO CONTENT'});
    }).catch(err => res.status(500).send({err}))
};

exports.delete_tarea = async function(req, res) {
    await Tarea.deleteOne({_id: req.params.tareaId})
        .then(tarea => {
            res.status(200).send({message:'Tarea removed', tarea})
        }
        ).catch(err => res.status(500).send({err}));
};