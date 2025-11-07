
import React from 'react';
import Seo from '../components/Seo';
import { businessInfo } from '../constants/businessInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import { Breadcrumb } from '../types';

const PrivacyPolicyPage: React.FC = () => {
    const pageUrl = `https://${businessInfo.domain}/#/privacy-policy`;
    const crumbs: Breadcrumb[] = [{ name: 'Privacy Policy', path: '/privacy-policy' }];

    return (
        <div>
            <Seo
                title={`Privacy Policy | ${businessInfo.name}`}
                description={`Read the privacy policy for ${businessInfo.domain}, operated by ${businessInfo.name}.`}
                canonicalUrl={pageUrl}
                breadcrumbs={crumbs}
            />
            <div className="bg-primary text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold font-serif">Privacy Policy</h1>
                </div>
            </div>
            <Breadcrumbs crumbs={crumbs} />
            <div className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose">
                    <h2>Introduction</h2>
                    <p>Welcome to {businessInfo.name}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {businessInfo.domain}.</p>

                    <h2>Information We Collect</h2>
                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you request a quote or contact us.</p>

                    <h2>Use of Your Information</h2>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to: respond to your requests, process transactions, and send you information about our services.</p>

                    <h2>Disclosure of Your Information</h2>
                    <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.</p>

                    <h2>Security of Your Information</h2>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

                    <h2>Contact Us</h2>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p>
                        {businessInfo.name}<br />
                        {businessInfo.address}<br />
                        {businessInfo.email}<br />
                        {businessInfo.phone}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;