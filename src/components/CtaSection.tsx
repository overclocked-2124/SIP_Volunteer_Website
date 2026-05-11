import React, { useState, ChangeEvent } from 'react';
import Button from './Button';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxJzCpBbhrY_a_Caeslw3Gmra_lbs6x6KYgvNJMq05IH4Q2R0NaH0Nx3lEsHgeNdggulg/exec';

const branches = [
    "Aerospace Engineering",
    "Biotechnology",
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Computer Science and Engineering (Artificial Intelligence & Machine Learning)",
    "Computer Science and Engineering (Cyber Security)",
    "Computer Science and Engineering (Data Science)",
    "Electrical and Electronics Engineering",
    "Electronics and Communication Engineering",
    "Electronics and Instrumentation Engineering",
    "Electronics and Telecommunication Engineering",
    "Industrial Engineering and Management",
    "Information Science and Engineering",
    "Mechanical Engineering",
];

const contributionOptions = [
    "Tech & Website Development",
    "Event Coordination / Volunteer Management",
    "Design (Posters, Brochures & Banners)",
    "Misc — I'm not sure yet, I just want to help!",
];

interface FormInputProps {
    id: string;
    name: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({ id, name, label, type = "text", value, onChange, required = true, placeholder }) => (
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

interface FormTextareaProps {
    id: string;
    name: string;
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
    placeholder?: string;
    rows?: number;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ id, name, label, value, onChange, required = true, placeholder, rows = 4 }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-semibold mb-2">{label}</label>
        <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            rows={rows}
            className="w-full p-3 bg-gray-100 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow duration-200 resize-y"
            placeholder={placeholder}
        />
    </div>
);

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        USN: '',
        branch: '',
        phone: '',
        email: '',
        gender: '',
        sipMoment: '',
        sipIdea: '',
    });
    const [contributions, setContributions] = useState<string[]>([]);
    const [availabilityConfirmed, setAvailabilityConfirmed] = useState(false);
    const [isFirstYear, setIsFirstYear] = useState(false);
    const [understandsDecision, setUnderstandsDecision] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleContributionChange = (option: string) => {
        setContributions(prev =>
            prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
        );
    };

    const isFormValid =
        formData.name &&
        formData.USN &&
        formData.branch &&
        formData.phone &&
        formData.email &&
        formData.gender &&
        formData.sipMoment &&
        formData.sipIdea &&
        contributions.length > 0 &&
        understandsDecision;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isFormValid || !availabilityConfirmed || !isFirstYear) return;

        if (!GOOGLE_APPS_SCRIPT_URL || !GOOGLE_APPS_SCRIPT_URL.startsWith('https://')) {
            alert('Please configure the Google Apps Script URL in components/CtaSection.tsx before submitting.');
            return;
        }

        setIsSubmitting(true);

        const submissionData = {
            ...formData,
            contributions: contributions.join(', '),
        };

        try {
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
            alert("There was an error submitting your application. Please check the console and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="bg-white/95 backdrop-blur-sm text-base-text rounded-2xl p-8 sm:p-12 text-center shadow-2xl transition-all duration-500">
                <h3 className="text-3xl font-bold mb-4 text-primary">Thank You!</h3>
                <p className="text-lg">Your application has been submitted successfully. We'll be in touch soon!</p>
            </div>
        );
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
                            onChange={e => setAvailabilityConfirmed(e.target.checked)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="availability" className="font-medium text-primary-dark">
                            Confirm Availability
                        </label>
                        <p className="text-gray-700 mt-1">
                            I confirm that I will be available during the <span className="font-semibold">2nd and 3rd week of August 2026</span> for SIP-related work.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <input
                            id="firstYear"
                            name="firstYear"
                            type="checkbox"
                            checked={isFirstYear}
                            onChange={e => setIsFirstYear(e.target.checked)}
                            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="firstYear" className="font-medium text-primary-dark">
                            Confirm Year of Study
                        </label>
                        <p className="text-gray-700 mt-1">
                            I confirm that I am a <span className="font-semibold">first year student</span> (2025–2029 batch).
                        </p>
                    </div>
                </div>
            </div>

            <fieldset disabled={!availabilityConfirmed || !isFirstYear} className="space-y-6 group">
                <div className="space-y-6 transition-opacity duration-300 ease-in-out group-disabled:opacity-50 group-disabled:pointer-events-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput id="name" name="name" label="Full Name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                        <FormInput id="USN" name="USN" label="USN" value={formData.USN} onChange={handleChange} placeholder="1RV24IS130" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormSelect id="branch" name="branch" label="Branch" value={formData.branch} onChange={handleChange}>
                            <option value="" disabled>Select Branch</option>
                            {branches.map(b => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </FormSelect>
                        <FormInput id="phone" name="phone" label="Phone Number" type="tel" value={formData.phone} onChange={handleChange} placeholder="9876543210" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormInput id="email" name="email" label="RVCE Email ID" type="email" value={formData.email} onChange={handleChange} placeholder="sumukhau.is24@rvce.edu.in" />
                        <FormSelect id="gender" name="gender" label="Gender" value={formData.gender} onChange={handleChange}>
                            <option value="" disabled>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </FormSelect>
                    </div>

                    <FormTextarea
                        id="sipMoment"
                        name="sipMoment"
                        label="What was your favourite moment or aspect of SIP 2025 that you'd want to carry forward?"
                        value={formData.sipMoment}
                        onChange={handleChange}
                        placeholder="Share your experience..."
                    />

                    <FormTextarea
                        id="sipIdea"
                        name="sipIdea"
                        label="Share one idea you'd like to implement in SIP 2026 for your juniors."
                        value={formData.sipIdea}
                        onChange={handleChange}
                        placeholder="Your idea..."
                    />

                    <div>
                        <p className="block text-sm font-semibold mb-3">How would you like to contribute? <span className="font-normal text-gray-500">(Select all that apply)</span></p>
                        <div className="space-y-3">
                            {contributionOptions.map(option => (
                                <label key={option} className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={contributions.includes(option)}
                                        onChange={() => handleContributionChange(option)}
                                        className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary flex-shrink-0"
                                    />
                                    <span className="text-sm text-gray-700">{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={understandsDecision}
                                onChange={e => setUnderstandsDecision(e.target.checked)}
                                className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-gray-700">
                                I understand that the final decision to select the Organising Committee rests with the Dean Student Affairs, RVCE.
                            </span>
                        </label>
                    </div>
                </div>
            </fieldset>

            <Button
                type="submit"
                size="large"
                variant="primary"
                className="w-full !mt-10"
                disabled={!availabilityConfirmed || !isFirstYear || !isFormValid || isSubmitting}
                onClick={() => {}}
            >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </Button>
        </form>
    );
};

const CtaSection = () => {
    return (
        <section id="register" className="bg-primary py-24 sm:py-32 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Ready to Make an Impact?</h2>
                    <p className="mt-4 opacity-90 text-lg leading-8">
                        Applications are open to 2nd semester students. Fill out the form below and tell us how you'd like to contribute to SIP 2026.
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
