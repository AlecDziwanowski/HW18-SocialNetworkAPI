const { Schema, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // likely need to change format
            get: dateTime => moment(dateTime).format('MMM Do, YYYY [at] h:mm a')
        },
    },
    {
        toJSON: {
            getters: true,
        },
        _id: false,
    }
);

module.exports = reactionSchema;
