import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        phoneNumber: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        message: '',
        phoneNumber: ''
    })

    const validateEmail = (email) => {
        const regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return regexp.test(email);
    }

    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
        return regex.test(phoneNumber);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        let errorMessage = '';
        if (name === "email") {
            errorMessage = validateEmail(value) ? '' : 'Invalid email address';
        } else if (name === "phoneNumber") {
            errorMessage = validatePhoneNumber(value) ? '' : 'Invalid phone number';
        } else if (name === "message") {
            errorMessage = value.trim().length > 0 ? '' : 'Message cannot be empty';
        }

        setErrors({ ...errors, [name]: errorMessage });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
        console.log(errors);
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col items-center pt-40">
                <form className="border-2 w-4/6 h-5/6 p-8 rounded-xl flex flex-col justify-between" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Email:
                            </label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Message:
                            </label>
                            <input id="message" name="message" value={formData.message} onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.message && <span className="text-red-500">{errors.message}</span>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone number:
                            </label>
                            <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
                        </div>
                    </div>
                    <div className="flex justify-end w-full">
                        <button className="w-1/3 bg-gray rounded-md" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact;