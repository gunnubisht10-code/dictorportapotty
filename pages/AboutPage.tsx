
import React from 'react';
import Seo from '../components/Seo';
import { businessInfo } from '../constants/businessInfo';
import { images } from '../assets/images';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const AboutPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/about`;
    const crumbs: Breadcrumb[] = [{ name: 'About Us', path: '/about' }];

    return (
        <div>
            <Seo
                title={`About ${businessInfo.name} | Decatur's Trusted Porta Potty Provider`}
                description={`Learn about Henry Rental Works, a locally owned business dedicated to providing clean, reliable portable toilet rentals and exceptional service to Decatur, TX and Wise County.`}
                canonicalUrl={pageUrl}
                ogImageUrl={images.aboutUsBackground}
                breadcrumbs={crumbs}
            />

            <div className="relative h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: `url(${images.aboutUsBackground})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-serif">About Us</h1>
                </div>
            </div>
            
            <Breadcrumbs crumbs={crumbs} />

            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary font-serif mb-4">Henry Rental Works: Your Local Sanitation Partner</h2>
                            <p className="text-lg text-neutral mb-4">
                                Founded right here in Decatur, Texas, Henry Rental Works was built on a simple promise: to provide our community with porta potty rental services that are clean, reliable, and straightforward. We saw a need for a local company that treats every construction site, every weekend party, and every large-scale event with the same level of importance.
                            </p>
                            <p className="text-neutral">
                                We're not a large, faceless corporation. We are your neighbors, committed to upholding our reputation for excellence with every delivery, every service call, and every pickup. When you work with us, you're supporting a local business that invests back into the Wise County community.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-xl">
                            <img src={images.team} alt="The friendly team at Henry Rental Works" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-3xl font-bold text-primary font-serif mb-8">Our Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-secondary mb-2">Reliability First</h4>
                                <p className="text-neutral">Your project or event can't wait. We guarantee on-time delivery and service, ensuring your sanitation needs are a stress-free part of your planning.</p>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-secondary mb-2">Uncompromising Cleanliness</h4>
                                <p className="text-neutral">We believe a portable restroom should be as clean as possible. Our multi-point sanitation process ensures every unit is pristine upon arrival and kept fresh throughout the rental.</p>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-secondary mb-2">Community Focus</h4>
                                <p className="text-neutral">As a local Decatur business, we're dedicated to the success of our community. We provide exceptional service to our neighbors because your success is our success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;