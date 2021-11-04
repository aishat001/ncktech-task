import React from 'react'
import mastercard from '../assets/mastercard-logo.png'
import cardChip from '../assets/chip.JPG'
import visa from '../assets/visa-logo.jpg'
import discover from '../assets/discover.png'
import paypal from '../assets/paypal-logo-png-transparent.png'

export default function Payment() {
    return (
        <section className="payment">
            <div className="container px-5 sm:px-10 m-auto">

                {/* payment information */}
                <div className="payment-details flex flex-col md:flex-row flex-wrap ">
                    <hr className="w-full my-10"/>
                    {/* credit card */}
                    <div id="credit-car-info" className="w-full md:w-6/12 text-left">
                        <h2 className="font-bold"> Payment Information </h2>
                        <p className="text-gray-300"> Choose your method of payment. </p>
                        <div className="bg-credit-card w-full md:max-w-xs p-5 my-5 text-white text-xs md:text-sm space-y-2 rounded-lg ">
                            <p>CARD NUMBER</p>
                            <p>4324 5433 9382 1030</p>
                            <img src={cardChip} alt="cardChip" className="h-7"/>                            <p>EXPIRATION DATE</p>
                            <p>03/24</p>
                            <p className="w-full inline-flex justify-between items-center">John Doe <img src={mastercard} alt="master-card-logo" className="h-7"/></p>

                        </div>
                    </div>

                    {/* credit card form */}
                    <div id="credit-car-form" className=" md:w-6/12 space-y-4">
                        <div className="flex flex-row justify-end space-x-3">
                            <img src={visa} alt="visa-logo" className=" h-5"/>
                            <img src={discover} alt="discover-logo" width="80px" className="w-20 h-6"/>
                            <img src={paypal} alt="visa-logo" className="w-20 h-6"/>
                        </div>
                        <form className="w-full text-left">
                            <div className="flex flex-wrap -mx-3 mb-6 ">
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Credit Card Number
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="4324 5433 9382 1030" />
                                </div>
                                <div className="w-full lg:w-1/2 px-3">
                                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Expiration Date
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="03/24" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full lg:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Security Code
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="420" max="3"/>
                                </div>
                                <div className="w-full lg:w-1/2 px-3">
                                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Postal Code
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="10119" max="5"/>
                                </div>
                            </div>
                            <div className="md:flex md:items-center mb-6">
                                <label className="md:w-2/3 block text-gray-500 font-bold inline-flex items-center">
                                    <input type="radio" className="form-radio text-blue mr-2 h-4 w-4" name="radio" value="1" checked/>
                                    <span className="text-sm">
                                    Use this card for next time purchase
                                    </span>
                                </label>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="w-full">
                                    <button className="w-full shadow btn-bg-blue hover:btn-bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Add Card
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* summary of payment */}
                <div id="payment-summary" className="space-y-5 font-bold text-sm md:text-lg">
                <hr className="w-full my-10"/>
                    <div className="w-full inline-flex flex-row justify-between">
                        <h4>Subtotal</h4>
                        <h4>₦2,497.00</h4>
                    </div>
                    <div className="w-full inline-flex flex-row justify-between">
                        <h4>Estimated TAX</h4>
                        <h4>₦119.64</h4>
                    </div>
                    <div className="w-full inline-flex flex-row justify-between">
                        <h4 className="inline-flex">Promotional Code: <span className="text-gray-300">Z4KXLM9A</span></h4>
                        <h4>₦-60.00</h4>
                    </div>
                </div>

                {/* complete payment and total */}
                <div id="payment-total" className="mb-10 text-sm">
                <hr className="w-full my-10"/>

                <div className="w-full inline-flex flex-row justify-between items-center">
                <button className="shadow btn-bg-blue hover:btn-bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Complete payment
                                    </button>
                    <h2 className="font-black text-lg">TOTAL:₦2556.64</h2>
</div>

                </div>
            </div>
        </section>
    )
}
