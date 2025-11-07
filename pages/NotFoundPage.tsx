
import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { businessInfo } from '../constants/businessInfo';

const NotFoundPage: React.FC = () => {
    return (
        <div>
            <Seo
                title={`404 - Page Not Found | ${businessInfo.name}`}
                description="The page you are looking for does not exist."
                canonicalUrl={`https://${businessInfo.domain}/#/404`}
            />
            <div className="flex items-center justify-center min-h-[60vh] bg-white">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-primary">404</h1>
                    <p className="text-2xl md:text-3xl font-semibold text-neutral-dark mt-4">Page Not Found</p>
                    <p className="text-neutral mt-4 mb-8">Sorry, the page you are looking for could not be found.</p>
                    <Link
                        to="/"
                        className="px-8 py-3 font-semibold rounded bg-accent text-primary hover:bg-yellow-400"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
