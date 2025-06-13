const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    ingredients: {
        type: [String],
        required: true,
    },
    steps: {
        type: [String],
        required: true,
    },
    tags: {
        type: [String],
        default: []
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    likedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});         //, { timestamps: true }); // ✅ This will auto-create `createdAt` and `updatedAt`

module.exports = mongoose.model('Recipe', RecipeSchema);