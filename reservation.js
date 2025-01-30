import errorHandler from '../error/error.js';
import { Reservation } from '../modules/reservationSchema.js';

export const sendReservation = async (req, res, next) => {
    const { firstName, LastName, email, phone, date,time } = req.body;

    if (!firstName || !LastName || !email || !phone || !time || !date) {
        // return next(new errorHandler("Please fill all details", 400));
        return res.status(403).json({
            success: true,
            message:"Please fill all details"
        })
    }

    try {
        console.log("begore create")
        const user = await Reservation.create({ firstName,LastName,email,phone,time,date });
        console.log("user",user);
        res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        if (error.errors) {
            const validationError = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                error:error,
                message: validationError.join(", "),
            });
        }
        console.log(error);
        return res.status(400).json({
            success: false,
            error:error,
            message: validationError.join(", "),
        });
        

        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
    // return next(error);
};

export default sendReservation;
