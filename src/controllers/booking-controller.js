const {BookingService} = require('../services/index')
const bookingservice = new BookingService();
const {StatusCodes} = require('http-status-codes')
const create = async(req, res) => {
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
        })
    }
}
module.exports = {
create
}