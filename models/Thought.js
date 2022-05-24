const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // likely need to change format
            get: (timeStamp) => {
                if (timeStamp)
                    return timeStamp.toISOString().split("T")[1]
            },
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
    }
);

thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return `${this.reactions.length}`;
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
