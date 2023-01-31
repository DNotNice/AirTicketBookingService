const express = require('express');
const router = express.Router();
const {BookingController} = require('../../controllers/index');
const {createChannel} = require('../../utils/messageQueue');
const bookingController = new BookingController();
router.get('/info' , (req, res)=> {return res.json({ message : 'response from routes'})});
router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMessagetoQueue);
module.exports = router;