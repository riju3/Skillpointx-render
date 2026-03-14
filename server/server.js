require("dotenv").config();
const express = require("express");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const paymentRouter = require("./routes/payment");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const PORT = process.env.PORT || 3000;
require("./database/connect");

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use("/admin", adminRouter);
app.use("/users", userRouter);
app.use("/payment", paymentRouter);


app.get('/', async (req, res) => {
    const { redirect_status } = req.query;

    try {
        if (redirect_status === "succeeded") {
            return res.json({ message: 'Payment Successful' })
        } else {
            return res.status(404).json({ message: 'Payment failed' })
        }
    } catch (error) {
        console.error("Error handling payment redirect:", error);
        return res.status(500).json({ message: 'Payment failed' })
    }
})
app.listen(PORT, () => console.log("Server is running on port " + PORT));
