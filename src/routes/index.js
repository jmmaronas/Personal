const express=require('express');
const router=express.Router();

const db=require('../personaldb');
const Personal = require('../models/personal');
const { json } = require('express');

router.get('/api', async (req,res)=>{
    const personal=await Personal.find();
    res.json({ personal });
});
//Filtrar

router.post('/', async (req,res)=>{
    
    let { especialidad, turno, horario }= req.body;
        if(especialidad!=="todo" && turno!=="todo" && horario!=="todo"){    
            const personal=await Personal.find({ especialidad, turno, horario});
            res.render('index',{ personal });            
        }else if(especialidad!=="todo"){
            if(turno!=="todo"){
                const personal=await Personal.find({ especialidad, turno});
                res.render('index',{ personal });
            }else if(horario!=="todo"){
                const personal=await Personal.find({ especialidad, horario});                
                res.render('index',{ personal });
            }else{
                const personal=await Personal.find({ especialidad});      
                res.render('index',{ personal });
            }
        }else if(turno!="todo"){
            if(horario!="todo"){
                const personal=await Personal.find({turno, horario});
                res.render('index',{ personal });
            }else{
                const personal=await Personal.find({turno});
                res.render('index',{ personal });
            }
        }else if(horario!="todo"){
            const personal=await Personal.find({horario});
            res.render('index',{ personal });
        }else{
            const personal=await Personal.find();
            res.render('index',{ personal });
        }        
});
//Cargar pantalla
router.get('/', async (req,res)=>{
    const personal=await Personal.find();
    res.render('index',{ personal });
});

//Agregar registro
router.get('/input', async (req, res)=>{
    //const personal= await Personal.find()
    res.render('input'/*, { personal }*/);
})
router.post('/input', async (req, res)=>{
    const persona=new Personal(JSON.parse(JSON.stringify(req.body)));
    await persona.save();
    res.redirect('/input');
})

router.post('/add', async (req, res)=>{
    const persona=new Personal(JSON.parse(JSON.stringify(req.body)));
    await persona.save();
    res.redirect('/');
});

//State Agente
router.get('/status/:id', async (req,res)=>{
    const { id } = req.params;
    const resultado = await Personal.findById(id);
    resultado.state = !resultado.state;
    await resultado.save();
    res.redirect('/');
});

//Edit registro
router.get('/edit/:id', async (req,res)=>{
    const { id } = req.params;
    const resultado = await Personal.findById(id);
    res.render('edit', { resultado });
    
});
router.post('/update/:id', async (req, res)=>{
    const { id } = req.params;
    const resultado =await Personal.updateMany({_id:id}, req.body);
    res.redirect('/');
});

//Eliminiar registro
router.get('/delete/:id', async (req,res)=>{
    const { id } = req.params;
    const resultado =await Personal.remove({_id:id});
    res.redirect('/');
});

//Search
router.post('/search',async (req, res)=>{
    let id =Object.values(JSON.parse(JSON.stringify(req.body)))[0];       
    if(id!=""){
    const resultado = await Personal.findById(id);
    res.render('edit', { resultado });    
    }else{ res.redirect('/')}
});
module.exports=router;