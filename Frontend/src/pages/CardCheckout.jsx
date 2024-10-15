import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../components/Title';

const CardCheckout = () => {

    const location = useLocation();
    const { orderData } = location.state || {};
    const { token, backendUrl, navigate, setCartItems } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    })

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            const paymentData = {
                cardNumber: formData.cardNumber,
                cardName: formData.cardName,
                expiryDate: formData.expiryDate,
                cvv: formData.cvv,
                amount: orderData.amount
            }

            const response = await axios.post(backendUrl + '/api/order/card-payment', orderData, { headers: { token } })
            if (response.data.success) {
                toast.success("Payment Successful")
                setCartItems({})
                navigate('/orders')
            }
            else {
                toast.error("Payment failed. Please try again.")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className='text-3xl text-center pt-10 border-t'>
                <Title text1={'CARD'} text2={'PAYMENT'} />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-6">Card Details</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Card Number */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Cardholder's Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Cardholder's Name</label>
                            <input
                                type="text"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Expiry Date */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-semibold mb-2">Expiry Date</label>
                            <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* CVV */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-semibold mb-2">CVV</label>
                            <input
                                type="number"
                                name="cvv"
                                maxLength={3}
                                value={formData.cvv}
                                onChange={handleChange}
                                placeholder="123"
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full bg-slate-200 text-black py-2 rounded-md hover:bg-black hover:text-white transition-all duration-300"
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Submit Payment'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CardCheckout
