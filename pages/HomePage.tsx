import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import ServiceCard from '../components/ServiceCard';
import { businessInfo } from '../constants/businessInfo';
import { homeFaqs } from '../constants/faqs';
import { services } from '../constants/services';
import { areas } from '../constants/areas';
import { images } from '../assets/images';

const HomePage: React.FC = () => {

    const localSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": businessInfo.name,
        "image": images.heroBackground,
        "@id": `https://${businessInfo.domain}/`,
        "url": `https://${businessInfo.domain}/`,
        "telephone": businessInfo.phone,
        "email": businessInfo.email,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": businessInfo.address,
            "addressLocality": businessInfo.city,
            "addressRegion": businessInfo.state,
            "postalCode": businessInfo.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.2332,
            "longitude": -97.5836
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "servesCuisine": "",
        "areaServed": {
            "@type": "Place",
            "name": "Decatur, TX"
        }
    };
    
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
    
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": `https://${businessInfo.domain}/`,
      "name": businessInfo.name,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `https://${businessInfo.domain}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    const decaturZips = "76234";

    return (
        <div>
            <Seo
                title="Porta Potty Rental, Decatur, TX | Henry Rental Works"
                description="Need a porta potty in Decatur, TX? Henry Rental Works offers fast, same-day delivery of clean portable toilets for construction, events, and more. Call now!"
                canonicalUrl={`https://${businessInfo.domain}/`}
                ogImageUrl={images.heroBackground}
                jsonLd={[localSchema, faqSchema, websiteSchema]}
            />

            {/* Hero Section */}
            <section className="relative bg-cover bg-center text-white py-24 md:py-32" style={{ backgroundImage: `url(${images.heroBackground})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold font-serif tracking-tight">Porta Potty Rental, Decatur, TX</h1>
                    <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
                        Your top choice for fast, reliable, and affordable porta potty rentals in Decatur. We provide portable toilet solutions for construction sites, special events, and more.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} className="bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
                           Call For A Free Quote
                        </a>
                        <Link to="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
                            Request Online
                        </Link>
                    </div>
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        <div className="text-center"><p className="font-bold text-lg">Same-Day Delivery</p><p className="text-sm text-gray-300">Fast & On Time</p></div>
                        <div className="text-center"><p className="font-bold text-lg">5-Star Service</p><p className="text-sm text-gray-300">Locally Trusted</p></div>
                        <div className="text-center"><p className="font-bold text-lg">Clean & Sanitized</p><p className="text-sm text-gray-300">Guaranteed Fresh</p></div>
                        <div className="text-center"><p className="font-bold text-lg">Affordable Rates</p><p className="text-sm text-gray-300">Upfront Pricing</p></div>
                    </div>
                </div>
            </section>

             {/* CTA Section */}
            <section className="bg-secondary text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Need a porta potty in Decatur, TX today?</h2>
                    <p className="mt-2 text-lg">We offer same-day delivery for most orders placed in the morning. Don't wait!</p>
                    <a href={`tel:${businessInfo.phone.replace(/\D/g, '')}`} className="mt-6 inline-block bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400">
                        Call Now: {businessInfo.phone}
                    </a>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Porta Potty Rental Services in Decatur, Texas</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral">
                           From long-term construction site rentals to upscale restroom trailers for elegant weddings, we have the right portable sanitation solution for you.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 6).map(service => (
                           <ServiceCard key={service.slug} service={service} />
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <Link to="/services" className="bg-primary text-white font-bold py-3 px-8 rounded-md text-lg hover:bg-secondary transition-colors">
                            View All Our Services
                        </Link>
                    </div>
                </div>
            </section>
            
            {/* Why Choose Us & Form Section */}
            <section className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Same-Day Porta Potty Delivery in Decatur, TX!</h2>
                        <h3 className="mt-2 text-2xl font-semibold text-secondary">Decatur's #1 Porta Potty Rental Company</h3>
                        <p className="mt-4 text-lg text-neutral">
                            At Henry Rental Works, we understand that sometimes you need a portable toilet right away. We are committed to providing Decatur with unmatched service, speed, and reliability for all portable restroom needs.
                        </p>
                        <ul className="mt-6 space-y-4">
                            <li className="flex items-start">
                                <CheckmarkIcon />
                                <div><strong className="font-semibold text-neutral-dark">Locally Owned & Operated:</strong> We're your neighbors, dedicated to serving the Decatur community with pride and accountability.</div>
                            </li>
                             <li className="flex items-start">
                                <CheckmarkIcon />
                                <div><strong className="font-semibold text-neutral-dark">Unbeatable Reliability:</strong> When we promise a delivery time, we mean it. Count on us for on-time delivery and service, every single time.</div>
                            </li>
                             <li className="flex items-start">
                                <CheckmarkIcon />
                                <div><strong className="font-semibold text-neutral-dark">Impeccably Clean Units:</strong> We enforce a strict, multi-point sanitation process, ensuring every unit is delivered spotless, fully stocked, and odor-free.</div>
                            </li>
                            <li className="flex items-start">
                                <CheckmarkIcon />
                                <div><strong className="font-semibold text-neutral-dark">Transparent, Affordable Pricing:</strong> No hidden fees or surprises. Get a straightforward, competitive quote for your porta potty rental needs.</div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-2xl">
                        <h3 className="text-2xl font-bold text-center mb-6 text-primary">Get Your Free Quote!</h3>
                        <ContactForm />
                    </div>
                </div>
            </section>
            
            {/* How It Works */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">How Our Rental Process Works</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral">Getting a porta potty is easy with our simple 3-step process.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <StepIcon num="1" />
                            <h3 className="text-2xl font-bold font-serif text-secondary mt-4">Get a Quote</h3>
                            <p className="mt-2 text-neutral">Call us or fill out our online form. We'll help you choose the right units and give you a clear, upfront price.</p>
                        </div>
                        <div className="p-6">
                            <StepIcon num="2" />
                            <h3 className="text-2xl font-bold font-serif text-secondary mt-4">We Deliver</h3>
                            <p className="mt-2 text-neutral">We deliver your clean, sanitized porta potties on time and place them exactly where you need them.</p>
                        </div>
                        <div className="p-6">
                             <StepIcon num="3" />
                            <h3 className="text-2xl font-bold font-serif text-secondary mt-4">We Pick Up</h3>
                            <p className="mt-2 text-neutral">When your rental period is over, we'll promptly pick up the units. No hassle, no worries.</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Types of Porta Potties */}
            <section className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Different Types of Porta Potties Available in Decatur, TX</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral">We offer a wide selection of portable toilet rentals to fit any requirement, occasion, or budget.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <TypeCard title="Standard Units" image={images.standardPortaPotty} slug="standard-porta-potty" />
                        <TypeCard title="Deluxe Flushing Units" image={images.deluxePortaPotty} slug="deluxe-porta-potty" />
                        <TypeCard title="ADA Accessible" image={images.adaPortaPotty} slug="ada-accessible-porta-potty" />
                        <TypeCard title="Luxury Restroom Trailers" image={images.luxuryTrailer} slug="restroom-trailer-rental" />
                    </div>
                </div>
            </section>
            
             {/* Cleanliness Commitment */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                         <img src={images.weeklyCleanings} alt="Technician cleaning a porta potty unit to the highest standards." className="w-full h-full object-cover" />
                    </div>
                     <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Our Commitment to Cleanliness</h2>
                         <p className="mt-4 text-lg text-neutral">
                           We know that cleanliness is the most important factor when renting a portable toilet. That's why we go above and beyond with our multi-point sanitation process. Every unit is power-washed, disinfected, and deodorized before delivery, and our weekly service includes a thorough cleaning and restocking to ensure a pleasant experience for your users.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif">What Our Customers Are Saying</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard quote="Henry Rental Works was a lifesaver for our construction project. Fast delivery and the units were always clean. Highly recommend!" author="- John D., Construction Foreman" />
                        <TestimonialCard quote="We rented a luxury trailer for our wedding and it was perfect. Our guests were so impressed! The service was professional from start to finish." author="- Sarah & Tom L." />
                        <TestimonialCard quote="The best porta potty service in Wise County, period. They were on time for our family reunion and the deluxe flushing unit was a game-changer." author="- Maria G." />
                    </div>
                </div>
            </section>


            {/* About Decatur Section */}
            <section className="py-16 md:py-24 bg-neutral-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Your Local Decatur Porta Potty Experts</h2>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral">Proudly serving all of Decatur and Wise County. We know the local roads, venues, and job sites to provide the best possible porta potty rental service, tailored to our community's needs. From events at the <Link to="/local-attractions/decatur-town-square" className="text-secondary hover:underline">Decatur Town Square</Link> to projects near the <Link to="/local-attractions/wise-county-courthouse" className="text-secondary hover:underline">Wise County Courthouse</Link>, we've got you covered.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="text-xl font-semibold text-secondary mb-2">Neighborhoods We Serve</h3>
                            <p className="text-neutral">From the historic downtown square to developing subdivisions, we cover every neighborhood in Decatur.</p>
                        </div>
                        <div>
                             <h3 className="text-xl font-semibold text-secondary mb-2">Landmarks We Know</h3>
                             <p className="text-neutral">We deliver to events near the Wise County Courthouse, work sites along Hwy 287, and gatherings at local parks.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-secondary mb-2">ZIP Codes Covered</h3>
                            <p className="text-neutral">Our primary service area includes the entire {decaturZips} ZIP code and all surrounding communities.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12 font-serif">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {homeFaqs.map((faq, index) => (
                            <FAQItem key={index} q={faq.q} a={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

// Helper components for HomePage
const CheckmarkIcon = () => (
    <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const StepIcon: React.FC<{ num: string }> = ({ num }) => (
    <div className="mx-auto bg-accent text-primary h-16 w-16 rounded-full flex items-center justify-center text-3xl font-bold font-serif">
        {num}
    </div>
);

const TestimonialCard: React.FC<{ quote: string, author: string }> = ({ quote, author }) => (
    <div className="bg-primary p-6 rounded-lg shadow-lg">
        <p className="text-gray-200 italic">"{quote}"</p>
        <p className="mt-4 font-bold text-accent text-right">{author}</p>
    </div>
);


const TypeCard: React.FC<{title: string, image: string, slug: string}> = ({title, image, slug}) => (
    <Link to={`/services/${slug}`} className="group block text-center">
        <div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-lg transform group-hover:-translate-y-1 transition-transform">
            <img src={image} alt={`Image of ${title} porta potty for rent in Decatur`} className="w-full h-full object-cover" loading="lazy" />
             <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-10 transition-colors duration-300"></div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-primary group-hover:text-secondary">{title}</h3>
    </Link>
);


const FAQItem: React.FC<{q: string, a: string}> = ({ q, a }) => {
    // In a real app, this would use state to be collapsible
    return (
        <div className="border-b pb-4">
            <h3 className="text-lg font-semibold text-neutral-dark mb-2">{q}</h3>
            <p className="text-neutral">{a}</p>
        </div>
    );
}

export default HomePage;