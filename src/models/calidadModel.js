const mongoose = require("mongoose")

const calidadWangoSchema = mongoose.Schema(
  {
    v1: {
      type: Number,
      required: true,
      trim: true,
    },
    o1: {
      type: String,
      required: false,
      trim: true,
    },
    v2: {
      type: Number,
      required: true,
      trim: true,
    },
    o2: {
      type: String,
      required: false,
      trim: true,
    },
    v3: {
      type: Number,
      required: true,
      trim: true,
    },
    o3: {
      type: String,
      required: false,
      trim: true,
    },
    v4: {
      type: Number,
      required: true,
      trim: true,
    },
    o4: {
      type: String,
      required: false,
      trim: true,
    },
    v5: {
      type: Number,
      required: true,
      trim: true,
    },
    o5: {
      type: String,
      required: false,
      trim: true,
    },
    v6: {
      type: Number,
      required: true,
      trim: true,
    },
    o6: {
      type: String,
      required: false,
      trim: true,
    },
    totalPoints: {
      type: Number,
      required: true,
      trim: true,
    },
    percentage: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const calidadWango = mongoose.model("Calidad", calidadWangoSchema)
module.exports = calidadWango