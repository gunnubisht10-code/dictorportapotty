
import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../types';

interface BreadcrumbsProps {
    crumbs: Breadcrumb[];
    className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs, className = '' }) => {
    return (
        <nav aria-label="Breadcrumb" className={`bg-neutral-light py-3 px-4 sm:px-6 lg:px-8 ${className}`}>
            <ol className="flex items-center space-x-2 text-sm">
                <li>
                    <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
                </li>
                {crumbs.map((crumb, index) => {
                    const isLast = index === crumbs.length - 1;
                    return (
                        <li key={index} className="flex items-center">
                            <svg className="w-4 h-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                            {isLast ? (
                                <span className="font-semibold text-neutral-dark" aria-current="page">{crumb.name}</span>
                            ) : (
                                <Link to={crumb.path} className="text-gray-500 hover:text-primary">{crumb.name}</Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
