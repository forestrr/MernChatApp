const mongoose =require('mongoose');
const chatModel = mongoose.Schema({
    chatName:{type:"string"},
    isGroup:{type:"boolean",default:false}, 
    users:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
],
latestmessge:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message" },
groupAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
},
{
    timestamps:true,
}
);
const chat = mongoose.model('Chat',chatModel);

module.exports = chat;
// chatname
// isgroupadmin
// users
// latest message
// groupadmin
