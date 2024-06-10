import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const {salary,month,year,email} = useParams(); 
    console.log(salary, month, year,email);
    return (
        <div className="w-[1024px]">
            <SectionTitle heading="Payment"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm salary={salary} month={month} year={year} email={email} ></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;