const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://Subhankar99Kunar:Lotus%40123@cluster0.lag8yir.mongodb.net/paytm")

const userSchema= new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
});

const accountSchema= new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: number,
        required: true
    }
});

const User= mongoose.model("User", userSchema);
const Account= mongoose.model("Account", accountSchema);

module.exports= {
    User,
    Account,
};