import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "Name is required"]
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 7
        },
        cartItems:[
            {
                quantity: {
                    type: Number,
                    default: 1
                },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product"
                }
            }
        ],
        role: {
            type: String,
            enum: ["admin", "engineer", "customer"],
            default: "customer"
        }   
    },
    {timestamps: true},
)

userSchema.pre("save", async function(next){
    if(!this.isModified("password"))
        return next();
    try{
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }catch(error){
        next(error);
    }
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", userSchema)  