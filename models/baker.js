const mongoose = require('mongoose')
const bread = require('./bread')

const bakerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Rachel', 'Ross', 'Monica', 'Joey', 'Chandler', 'Phoebe']
  },
  startDate: {
    type: Date,
    required: true
  },
  bio: String
}, {
  toJSON: { virtuals: true }
})

bakerSchema.post('findOneAndDelete', async function() {
  await bread.deleteMany({ baker: this._conditions._id })
})

bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker'
})

module.exports = mongoose.model('Baker', bakerSchema)