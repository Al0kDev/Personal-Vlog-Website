const mongooes = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongooes.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password:{
            type:String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    try{
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(this.password, salt);
        this.password = hashPassword;
        next();
    }catch(error){
        next(error);
    }
})

userSchema.methods.comparePassword = async function (candidatePassword) {
    try{
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(error){
        return error;
    }
    
}

const user = mongooes.model("user",userSchema);

module.exports = user;