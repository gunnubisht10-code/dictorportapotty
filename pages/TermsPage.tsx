
import React from 'react';
import Seo from '../components/Seo';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const TermsPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/terms-and-conditions`;
    const crumbs: Breadcrumb[] = [{ name: 'Terms & Conditions', path: '/terms-and-conditions' }];

    return (
        <div>
            <Seo
                title={`Terms and Conditions | ${businessInfo.name}`}
                description={`Review the terms and conditions for using ${businessInfo.domain}.`}
                canonicalUrl={pageUrl}
                breadcrumbs={crumbs}
            />
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold font-serif">Terms and Conditions</h1>
                </div>
            </div>
            <Breadcrumbs crumbs={crumbs} />
            <div className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
                    <h2>Agreement to Terms</h2>
                    <p>By using this website, you agree to be bound by these Terms and Conditions. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
                    
                    <h2>Use License</h2>
                    <p>Permission is granted to temporarily download one copy of the materials on {businessInfo.name}'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    
                    <h2>Disclaimer</h2>
                    <p>The materials on {businessInfo.name}'s website are provided on an 'as is' basis. {businessInfo.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
                    
                    <h2>Limitations</h2>
                    <p>In no event shall {businessInfo.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on {businessInfo.name}'s website.</p>
                    
                    <h2>Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of Texas and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;