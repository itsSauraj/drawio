/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded.
// bootstrap.js only loads this file on a self-hosted domain, so anything left
// as a REPLACE_WITH_* placeholder here ships as a literal broken URL.
window.DRAWIO_PUBLIC_BUILD = true;
window.EXPORT_URL = null; // Replace with the URL of your export server to enable server-side PDF and image export, e.g. https://www.example.com/export. With null, export to PDF uses the print dialog
window.DRAWIO_BASE_URL = "https://draw.saurabh-yadav.me"; // Replace with path to base of deployment, e.g. https://www.example.com/folder
window.DRAWIO_VIEWER_URL = null; // Replace your path to the viewer js, e.g. https://www.example.com/js/viewer.min.js
window.DRAWIO_LIGHTBOX_URL = null; // Replace with your lightbox URL, eg. https://www.example.com
window.DRAW_MATH_URL = 'math4/es5';
window.DRAWIO_CONFIG = null; // https://www.drawio.com/doc/faq/configure-diagram-editor
urlParams['sync'] = 'manual';

// GitHub Pages is static, so the servlets that broker OAuth (/google,
// /microsoft, /github2, /gitlab, /dropbox) do not exist. Hide the storage
// backends that depend on them instead of offering sign-ins that 404.
// Deliberately not using urlParams['stealth'], which also flips the app into
// offline mode (EditorUi.js isOffline) and disables online templates.
urlParams['gapi'] = '0'; // Google Drive
urlParams['db'] = '0';   // Dropbox
urlParams['od'] = '0';   // OneDrive
urlParams['gh'] = '0';   // GitHub
urlParams['gl'] = '0';   // GitLab
urlParams['tr'] = '0';   // Trello
