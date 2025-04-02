const mongoose = require('mongoose')

const trader = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true},
    profitrate: { type: String, required: true },
    tradehistory: { type:[Object] },
    followers:{type:String,default: '50345'},
    numberoftrades:{type:String,default: '64535'},
    riskscore:{type:String,default: '20%'},
    confidence: { type: String, default: '92%' },
    tradeplan:{type:String,required:true}
  }
)
const Trader = mongoose.models.Trader || mongoose.model('Trader', trader)
module.exports = Trader