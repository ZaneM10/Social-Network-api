const { Schema, Types } = require("mongoose");

const formatDate = (date) => {
  return dayjs(date).format("M/D/YYYY h:mm a");
};

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
   deafault: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
    get: formatDate,
  },
});



module.exports = reactionSchema;