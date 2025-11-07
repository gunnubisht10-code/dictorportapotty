
import React from 'react';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const ContactPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/contact`;
    const crumbs: Breadcrumb[] = [{ name: 'Contact Us', path: '/contact' }];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": pageUrl,
        "name": `Contact ${businessInfo.name}`,
        "description": "Get in touch with Henry Rental Works for a free porta potty rental quote in Decatur, TX. Call us, email us, or use our contact form for fast service.",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": pageUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": businessInfo.name,
            "logo": {
                "@type": "ImageObject",
                "url": `https://${businessInfo.domain}/logo.png`
            }
        }
    };

    return (
        <div>
            <Seo
                title={`Contact Us | ${businessInfo.name} | Free Porta Potty Quote`}
                description={`Get in touch with Henry Rental Works for a free porta potty rental quote in Decatur, TX. Call ${businessInfo.phone}, email, or use our easy contact form.`}
                canonicalUrl={pageUrl}
                jsonLd={jsonLd}
                breadcrumbs={crumbs}
            />

            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif">Contact Us</h1>
                    <p className="mt-4 text-lg">We're ready to help. Reach out today for a fast, free, no-obligation quote.</p>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        
                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-xl">
                            <h2 className="text-3xl font-bold text-primary font-serif mb-6">Send Us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-secondary mb-4">Contact Information</h3>
                                <div className="space-y-4 text-neutral">
                                    <p className="flex items-start">
                                        <PhoneIcon />
                                        <a href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} className="ml-3 hover:text-primary font-semibold">{businessInfo.phone}</a>
                                    </p>
                                    <p className="flex items-start">
                                        <EmailIcon />
                                        <a href={`mailto:${businessInfo.email}`} className="ml-3 hover:text-primary">{businessInfo.email}</a>
                                    </p>
                                    <p className="flex items-start">
                                        <LocationIcon />
                                        <span className="ml-3">{businessInfo.address}</span>
                                    </p>
                                    <p className="flex items-start">
                                        <ClockIcon />
                                        <span className="ml-3">{businessInfo.hours}</span>
                                    </p>
                                </div>
                            </div>
                             <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-secondary mb-4">Our Location</h3>
                                <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.657787494196!2d-97.5843450847986!3d33.22013198075678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864d66395e921e49%3A0x6a0a8b9f1d0c1b7e!2s3882%20S%20Hwy%20287%2C%20Decatur%2C%20TX%2076234!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Map of Henry Rental Works location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// SVG Icon Components
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

export default ContactPage;