import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link 
                style={{
                    color: "white", 
                    background: match ? "linear-gradient(260.06deg, rgb(255, 55, 242) -4.88%, rgb(64, 90, 255) 89.47%)" : 
                    match === '/' ? "linear-gradient(260.06deg, rgb(255, 55, 242) -4.88%, rgb(64, 90, 255) 89.47%)" : "none"
                }}
                className={match ? "active" : "inactive"} 
                to={to} {...props}>
                {children}
            </Link>
        </div>
    );
};
export default CustomLink;