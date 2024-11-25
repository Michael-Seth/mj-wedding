"use client";
import { NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY } from "@/constants/config";
import React from "react";
import { PaystackButton } from "react-paystack";
interface FormBtnProps {
  disabled: boolean;
  amount: number;
  text: string;
  email: string;
  fullName: string;
  className?: string; // Optional className prop
}

const FormBtn: React.FC<FormBtnProps> = ({
  disabled,
  amount,
  text,
  email,
  fullName,
}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

  const customerEmail = email ? email : "";
  const customerName = fullName;
  const finalAmount = amount * 100;
  const paymentConfig = {
    reference: `txn_${Date.now()}_${Math.floor(Math.random() * 1000000)}`, // Unique reference
    email: customerEmail,
    firstname: customerName,
    amount: finalAmount,
    channels: ["card", "bank_transfer"],
    bank_transfer: {
      account_expires_at: null,
    },
    publicKey: NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  };

  const handlePaystackSuccessAction = async () => {
    // setIsModalOpen(true); // Open the modal when payment is successful
    console.log("Made success Payment");

  };

  const handlePaystackCloseAction = () => {
    console.log("User closed Payment");
  };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

  const paymentProps = {
    ...paymentConfig,
    text,
    onSuccess: () =>
      handlePaystackSuccessAction(),
    onClose: handlePaystackCloseAction,
  };

  return (
    <>
      <PaystackButton
        {...paymentProps}
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
        disabled={disabled}
      />
      {/* <Modal /> */}
    </>
  );
};

export default FormBtn;
