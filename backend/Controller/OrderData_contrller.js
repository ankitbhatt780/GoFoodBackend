const OrderModel = require("../models/OrderData_Model")


async function order_data(req, res) {
    let data = req.body.order_data
    const email = req.body.email;
    // console.log("email", email)
    // console.log("bhatt", data)

    await data.splice(0, 0, { Order_date: req.body.order_date })
    // console.log("1231242343242354", email)

    //if email not exisitng in db then create: else: InsertMany()
    let eId = await OrderModel.findOne({ email })
    // console.log(eId)
    if (eId === null) {
        try {
            // console.log(data)

            await OrderModel.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.status(200).json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await OrderModel.findOneAndUpdate({ email: req.body.email },
                { $push: { order_data: data } }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            // console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
}

async function MyOrderData(req, res) {

    // console.log(req.body.email)

    try {
        let eId = await OrderModel.findOne({ "email": req.body.email })
        res.status(200).json({ orderData: eId })

    }
    catch (err) {
        res.status(400).json(err)
    }
}



module.exports = { order_data, MyOrderData }





// const OrderModel = require("../models/OrderData_Model")
// async function order_data(req, res) {
//     const orderData = req.body.order_data;
//     const email = req.body.email;

//     console.log(orderData);
//     console.log(email);

//     // Find the order by email
//     const existingOrder = await OrderModel.findOne({ email });

//     try {
//         if (!existingOrder) {
//             // Create a new order if no existing order is found
//             await OrderModel.create({
//                 email,
//                 order_data: [
//                     {
//                         order_date: req.body.order_date,
//                         ...orderData,
//                     },
//                 ],
//             });

//             res.status(200).json({ success: true });
//         } else {
//             // Update the existing order with new data
//             existingOrder.order_data.push({
//                 order_date: req.body.order_date,
//                 ...orderData,
//             });

//             await existingOrder.save();

//             res.status(201).json({ success: true });
//         }
//     } catch (err) {
//         res.status(400).json("Server error:", err);
//     }
// }
// module.exports = { order_data }
