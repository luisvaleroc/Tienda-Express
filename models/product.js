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
        type: Boolean,
        default: true,
        required: true

    },
    completado: {
        type: Boolean,
        default: false,
        required: true
    }
}
);

module.exports = mongoose.model("Product", productSchema);
