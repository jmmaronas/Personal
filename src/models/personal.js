const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const PersonalSchema=new Schema({
    nombre:String,require:true,
    dni: String ,require:true,
    legajo: String,require:true,
    especialidad: String,require:false,
    turno: String, require:false,
    horario: String, require:false,
    state: {
        type: Boolean,
        default: true
    }
});
// new FormData({
    
// });

module.exports = mongoose.model('personal', PersonalSchema);