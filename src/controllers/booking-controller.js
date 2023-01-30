const {BookingService} = require('../services/index')
const bookingservice = new BookingService();
const {createChannel,publishMessage } = require('../utils/messageQueue');
const{REMINDER_BINDING_KEY} = require('../config/server-config')
const {StatusCodes} = require('http-status-codes');
class BookingController{
    constructor(){
       
    }
    async sendMessagetoQueue (req, res){
        try {
        const channel = await createChannel();
        const payload = {
             data : {subject : 'This is a noti from queue',
            content : 'Some queue will subscribe this',
            recepientEmail : 'dewanshpandey@gmail.com',
            notificationTime : ' 2023-01-30 19:29:28'
        } , service : 'CREATE_TICKET'
            };
        publishMessage(channel ,REMINDER_BINDING_KEY , JSON.stringify(payload));
        return res.status(200).json({
            message :'successfully published the event',
            success:true
        });
    } catch (error) {
            res.status(500).json({
                message:error,
                success:false,
            
            })         
        }
    }
  async create (req, res) {
    try {
        const respo = await bookingservice.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message : 'successfully completed a booking',
            data : respo,
            err : {}
        })
    } catch (error) {   
        return res.status(error.statusCodes).json({
            success:false,
            message : error.message,
            data : {},
            err : error.explanation
        });
    }
 }
}
module.exports = BookingController