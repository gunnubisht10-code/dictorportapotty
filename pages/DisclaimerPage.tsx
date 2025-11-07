
import React from 'react';
import Seo from '../components/Seo';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const DisclaimerPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/disclaimer`;
    const crumbs: Breadcrumb[] = [{ name: 'Disclaimer', path: '/disclaimer' }];

    return (
        <div>
            <Seo
                title={`Disclaimer | ${businessInfo.name}`}
                description={`Disclaimer for ${businessInfo.domain}.`}
                canonicalUrl={pageUrl}
                breadcrumbs={crumbs}
            />
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold font-serif">Disclaimer</h1>
                </div>
            </div>
            <Breadcrumbs crumbs={crumbs} />
            <div className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
                    <p>The information provided by {businessInfo.name} ("we," "us," or "our") on {businessInfo.domain} (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
                    <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
                    <p>The Site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice. THE USE OR RELIANCE OF ANY INFORMATION CONTAINED ON THIS SITE IS SOLELY AT YOUR OWN RISK.</p>
                </div>
            </div>
        </div>
    );
};

export default DisclaimerPage;