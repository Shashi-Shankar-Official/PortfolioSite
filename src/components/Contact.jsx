import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Contact Me
                </h2>
                <form className="bg-gradient-to-r from-gray-800 via-blue-900/30 to-gray-800 rounded-lg 
                                shadow-xl p-8 backdrop-blur-sm bg-opacity-50">
                    <div className="mb-6">
                        <label 
                            htmlFor="name" 
                            className="block text-gray-300 text-sm font-medium mb-2"
                        >
                            Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            required 
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                                     text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:border-transparent transition duration-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="email" 
                            className="block text-gray-300 text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                                     text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:border-transparent transition duration-300"
                        />
                    </div>
                    <div className="mb-6">
                        <label 
                            htmlFor="message" 
                            className="block text-gray-300 text-sm font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea 
                            id="message" 
                            name="message" 
                            required 
                            rows="4"
                            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                                     text-white focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     focus:border-transparent transition duration-300 resize-none"
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 
                                 rounded-lg transition duration-300 transform hover:scale-[1.02] 
                                 active:scale-[0.98] focus:outline-none focus:ring-2 
                                 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;