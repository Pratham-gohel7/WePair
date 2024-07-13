import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10 border-t mt-5 border-gray-300 dark:bg-slate-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between">
                {/* About Us Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">About Us</h3>
                    <p className="text-gray-600 text-sm">
                        We offer reliable and professional at-home repair services for a wide range of electronic gadgets including mobile phones, computers, ACs, washing machines, refrigerators, televisions, and microwaves. Your convenience and satisfaction are our top priorities.
                    </p>
                </div>
                {/* Services Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-blue-500">Mobile Phone Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">Computer Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">AC Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">Washing Machine Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">Refrigerator Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">Television Repair</a></li>
                        <li><a href="#" className="hover:text-blue-500">Microwave Repair</a></li>
                    </ul>
                </div>
                {/* Quick Links Section */}
                <div className="w-full md:w-1/4 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                    <ul className="text-gray-600 text-sm space-y-2">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                        <li><a href="#" className="hover:text-blue-500">Services</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
                        <li><a href="#" className="hover:text-blue-500">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                    </ul>
                </div>
                {/* Contact Us Section */}
                <div className="w-full md:w-1/4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
                    <p className="text-gray-600 text-sm">
                        <strong>Address:</strong> 123 Repair St, FixCity, FC 12345<br />
                        <strong>Phone:</strong> (123) 456-7890<br />
                        <strong>Email:</strong> support@gadgetrepair.com
                    </p>
                    <div className="mt-4 space-x-3">
                        <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
                        <a href="#" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-4 mt-6 border-t border-gray-300 text-center dark:bg-slate-900 dark:text-white">
                <p className="text-sm text-gray-600">&copy; 2024 Gadget Repair Services. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
