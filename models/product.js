const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
    estado: {
        type: Boolean

    }}
        
);

module.exports = mongoose.model("Product", productSchema);
