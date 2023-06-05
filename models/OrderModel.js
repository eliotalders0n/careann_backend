import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    orderItems: [
      {
        slug: { type: String, required: true },
        caregiverName: { type: String, required: true },
        careType: { type: Number, required: true },
        price: { type: Number, required: true },
        caregiver: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Caregiver",
        },
      },
    ],
    clientAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      country: { type: String, required: true },
      city: { type: String, required: true },
      province: { type: String, required: true },
      phoneNumber: { type: Number },
      zipCode: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: false },
    paymentResult: {
      id: String,
      status: String,
      email_address: String,
      update_time: String,
    },
    servicePrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;