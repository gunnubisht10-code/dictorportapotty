
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import { services } from '../constants/services';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const ServiceDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find(s => s.slug === slug);

    if (!service) {
        return <Navigate to="/404" replace />;
    }

    const pageUrl = `https://${businessInfo.domain}/#/services/${service.slug}`;
    const crumbs: Breadcrumb[] = [{ name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.slug}` }];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.title,
        "provider": {
            "@type": "LocalBusiness",
            "name": businessInfo.name,
            "address": {
                 "@type": "PostalAddress",
                "streetAddress": businessInfo.address,
                "addressLocality": "Decatur",
                "addressRegion": "TX",
                "postalCode": "76234"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Decatur"
        },
        "description": service.description,
        "name": `${service.title} Rental in Decatur, TX`
    };

    const relatedServices = services.filter(s => service.relatedServices?.includes(s.slug));

    return (
        <div>
            <Seo
                title={`${service.title} Rental | ${businessInfo.name} | Decatur, TX`}
                description={`Rent a ${service.title.toLowerCase()} in Decatur, TX from ${businessInfo.name}. ${service.description} Get a free quote today.`}
                canonicalUrl={pageUrl}
                ogImageUrl={service.image}
                jsonLd={serviceSchema}
                breadcrumbs={crumbs}
            />

            <div className="bg-secondary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-center">{service.title} Rental</h1>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img src={service.image} alt={service.altText} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-primary font-serif mb-4">Top-Quality {service.title}s</h2>
                            <p className="text-lg text-neutral mb-6">{service.description}</p>
                            <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-colors">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                    
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-2xl font-bold text-secondary font-serif mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {service.content.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckIcon />
                                        <span className="text-neutral">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-secondary font-serif mb-4">Perfect For</h3>
                            <ul className="space-y-3">
                                {service.content.useCases.map((useCase, index) => (
                                    <li key={index} className="flex items-start">
                                        <PinIcon />
                                        <span className="text-neutral">{useCase}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {service.faqs.length > 0 && (
                        <div className="mt-20 max-w-4xl mx-auto">
                            <h3 className="text-3xl font-bold text-primary font-serif mb-8 text-center">Frequently Asked Questions</h3>
                            <div className="space-y-6">
                                {service.faqs.map((faq, index) => (
                                    <div key={index} className="border-b pb-4">
                                        <h4 className="text-lg font-semibold text-neutral-dark mb-2">{faq.q}</h4>
                                        <p className="text-neutral">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {relatedServices.length > 0 && (
                        <div className="mt-20 pt-10 border-t">
                             <h3 className="text-3xl font-bold text-primary font-serif mb-8 text-center">You Might Also Be Interested In</h3>
                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {relatedServices.map(related => (
                                    <Link to={`/services/${related.slug}`} key={related.slug} className="block p-6 bg-neutral-light rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform">
                                        <h4 className="font-bold text-lg text-secondary">{related.title}</h4>
                                        <p className="text-sm text-neutral mt-2">{related.description}</p>
                                        <span className="font-semibold text-primary mt-4 inline-block">Learn More &rarr;</span>
                                    </Link>
                                ))}
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const CheckIcon = () => <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>;
const PinIcon = () => <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export default ServiceDetailPage;