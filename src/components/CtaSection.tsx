import React, { useState, ChangeEvent } from 'react';
import Button from './Button';

// TODO: Replace this placeholder with your own Google Apps Script Web App URL.
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyGbxMWgws5_EsnbS7wku-YYfj7-VZpZ6umZpTLoU7jpMarJICGTbfFTQ-_KwpY3f0/exec';

const departments = [
    { value: "AS", label: "Aerospace Engineering" },
    { value: "BT", label: "Biotechnology" },
    { value: "CH", label: "Chemical Engineering" },
    { value: "CV", label: "Civil Engineering" },
    { value: "CS", label: "Computer Science & Engineering" },
    { value: "CI", label: "Computer Science & Engineering - Artificial Intelligence & Machine Learning" },
    { value: "CY", label: "Computer Science & Engineering - Cyber Security" },
    { value: "CD", label: "Computer Science & Engineering - Data Science" },
    { value: "EE", label: "Electrical & Electronics Engineering" },
    { value: "EC", label: "Electronics & Communication Engineering" },
    { value: "ET", label: "Electronics & Telecommunication Engineering" },
    { value: "EI", label: "Electronics and Instrumentation Engineering" },
    { value: "IM", label: "Industrial Engineering & Management" },
    { value: "ISE", label: "Information Science & Engineering" },
    { value: "ME", label: "Mechanical Engineering" },
].sort((a, b) => a.label.localeCompare(b.label));

interface FormInputProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
    min?: string | number;
    max?: string | number;
}

const FormInput: React.FC<FormInputProps> = ({ id, name, label, type = "text", value, onChange, required = true, placeholder, min, max }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold mb-2">{label}</label>
        <input 
            type={type} 
            id={id} 
            name={name} 
            value={value} 
            onChange={onChange} 
            required={required} 
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200" 
            placeholder={placeholder}
            min={min}
            max={max}
        />
    </div>
);

interface FormSelectProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
    children: React.ReactNode;
}

const FormSelect: React.FC<FormSelectProps> = ({ id, name, label, value, onChange, required = true, children }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold mb-2">{label}</label>
        <div className="relative">
            <select 
                id={id} 
                name={name} 
                value={value} 
                onChange={onChange} 
                required={required} 
                className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200 appearance-none pr-10 cursor-pointer"
            >
                {children}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
);

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        semester: '',
        USN: '',
        phone: '',
        email: '',
        gender: '',
        department: '',

    });
    const [availabilityConfirmed, setAvailabilityConfirmed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAvailabilityChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAvailabilityConfirmed(e.target.checked);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const isFormValid = formData.name && formData.semester && formData.USN && formData.phone && formData.email && formData.gender && formData.department;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid || !availabilityConfirmed) return;

        if (!GOOGLE_APPS_SCRIPT_URL || !GOOGLE_APPS_SCRIPT_URL.startsWith('https://')) {
            alert('Please configure the Google Apps Script URL in components/CtaSection.tsx before submitting.');
            return;
        }

        setIsSubmitting(true);
        
        const departmentLabel = departments.find(d => d.value === formData.department)?.label || formData.department;
        const submissionData = {
            ...formData,
            department: departmentLabel,
        };

        try {
            // We send as text/plain to bypass the CORS preflight OPTIONS request that browsers send for application/json.
            // The Apps Script will parse the text body as JSON.
            await fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'cors',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify(submissionData)
            });
            
            setIsSubmitted(true);

        } catch (error) {
            console.error("Error submitting to Google Sheet:", error);
            alert("There was an error submitting your registration. Please check the console and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    if (isSubmitted) {
        return (
            <div className="bg-white/95 backdrop-blur-sm text-base-text rounded-2xl p-8 sm:p-12 text-center shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold mb-4 text-primary">Thank You!</h3>
                <p className="text-lg mb-6">Your registration has been submitted successfully. We'll be in touch soon!</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                    <p className="text-base text-green-800 mb-4 font-medium">
                        Please make sure to join the volunteers WhatsApp group
                    </p>
                    <a
                        href="https://chat.whatsapp.com/H1EPftAhJAABIobLTIiQEB?mode=ems_wa_c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        Join WhatsApp Group
                    </a>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm text-left text-base-text rounded-2xl p-8 sm:p-12 shadow-2xl space-y-6">
            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <input
                            id="availability"
                            name="availability"
                            type="checkbox"
                            checked={availabilityConfirmed}
                            onChange={handleAvailabilityChange}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="availability" className="font-medium text-primary-dark">
                            Confirm Availability
                        </label>
                        <p className="text-gray-700 mt-1">
                            I confirm that I am available from <span className="font-semibold">25th Aug, 2025</span> to <span className="font-semibold">6th Sept, 2025</span> to volunteer for the SIP.
                        </p>
                    </div>
                </div>
            </div>

            <fieldset disabled={!availabilityConfirmed} className="space-y-6 group">
                <div className="space-y-6 transition-opacity duration-300 ease-in-out group-disabled:opacity-50 group-disabled:pointer-events-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput id="name" name="name" label="Full Name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                        <FormInput id="semester" name="semester" label="Semester" type="number" min="1" max="8" value={formData.semester} onChange={handleChange} placeholder="e.g., 3" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput id="USN" name="USN" label="USN" type="text" value={formData.USN} onChange={handleChange} placeholder="1RV24IS150" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput id="phone" name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} placeholder="9876543210" />
                        <FormInput id="email" name="email" label="Email ID" type="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormSelect id="gender" name="gender" label="Gender" value={formData.gender} onChange={handleChange}>
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="prefer_not_to_say">Prefer not to say</option>
                        </FormSelect>
                        <FormSelect id="department" name="department" label="Department" value={formData.department} onChange={handleChange}>
                            <option value="" disabled>Select Department</option>
                            {departments.map(dept => (
                                <option key={dept.value} value={dept.value}>{dept.label}</option>
                            ))}
                        </FormSelect>
                    </div>
                </div>
            </fieldset>

            <Button
                type="submit"
                size="large"
                variant="primary"
                className="w-full !mt-10"
                disabled={!availabilityConfirmed || !isFormValid || isSubmitting}
                onClick={() => {}}
            >
                {isSubmitting ? 'Submitting...' : 'Register as a Volunteer'}
            </Button>
        </form>
    )
}

const CtaSection = () => {
    return (
        <section id="register" className="bg-primary py-24 sm:py-32 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Ready to Make an Impact?</h2>
                    <p className="mt-4 opacity-90 text-lg leading-8">
                        Join a community of leaders and changemakers. Fill out the form below to be a part of the next Student Induction Programme.
                    </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <RegistrationForm />
                </div>
            </div>
        </section>
    );
};

export default CtaSection;