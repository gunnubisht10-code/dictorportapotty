
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { attractions } from '../constants/attractions';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const AttractionPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const attraction = attractions.find(a => a.slug === slug);

    if (!attraction) {
        return <Navigate to="/404" replace />;
    }

    const pageUrl = `https://${businessInfo.domain}/#/local-attractions/${attraction.slug}`;
    const crumbs: Breadcrumb[] = [
        { name: 'Local Attractions', path: '/local-attractions' }, 
        { name: attraction.name, path: `/local-attractions/${attraction.slug}` }
    ];

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": attraction.name,
      "description": attraction.description,
      "url": pageUrl,
      "image": attraction.image,
      "isPartOf": {
        "@type": "WebSite",
        "url": `https://${businessInfo.domain}/`,
        "name": businessInfo.name
      }
    };

    return (
        <div>
            <Seo
                title={`${attraction.name} | Decatur, TX Local Guide`}
                description={attraction.description}
                canonicalUrl={pageUrl}
                ogImageUrl={attraction.image}
                ogType="article"
                jsonLd={webpageSchema}
                breadcrumbs={crumbs}
            />

            <div className="relative h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${attraction.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center font-serif">{attraction.name}</h1>
                </div>
            </div>

             <Breadcrumbs crumbs={crumbs} />
            
            <div className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose lg:prose-xl max-w-none">
                        <p className="text-lg text-neutral-dark">{attraction.description}</p>
                    </article>

                    <div className="mt-12 pt-8 border-t">
                        <h2 className="text-2xl font-bold text-primary text-center">Need Event Services?</h2>
                        <p className="mt-2 text-center text-neutral max-w-2xl mx-auto">
                            Planning an event near {attraction.name} or elsewhere in the Decatur area? 
                            Henry Rental Works provides clean and reliable porta potty rentals to ensure your guests are comfortable.
                        </p>
                        <div className="mt-6 text-center">
                            <Link to="/contact" className="bg-accent text-primary font-bold py-3 px-8 rounded-md text-lg hover:bg-yellow-400 transition-colors">
                                Get a Free Quote for Your Event
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttractionPage;