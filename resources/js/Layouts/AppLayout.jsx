// resources/js/Layouts/AppLayout.jsx
import React from 'react';

const AppLayout = ({ children, title = 'NiceAdmin Template' }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title}</title>

                {/* NiceAdmin CSS */}
                <link href="/niceadmin/assets/css/style.css" rel="stylesheet" />
                <link href="/niceadmin/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/niceadmin/assets/vendor/fontawesome/css/all.min.css" rel="stylesheet" />
            </head>
            <body>
                {children}

                {/* NiceAdmin JS */}
                <script src="/niceadmin/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                <script src="/niceadmin/assets/js/main.js"></script>
            </body>
        </html>
    );
};

export default AppLayout;
