/**
 * Copyright (c) 2006-2024, JGraph Holdings Ltd
 * Copyright (c) 2006-2024, draw.io AG
 */
// Overrides of global vars need to be pre-loaded.
// bootstrap.js only loads this file on a self-hosted domain, so anything left
// as a REPLACE_WITH_* placeholder here ships as a literal broken URL.
window.DRAWIO_PUBLIC_BUILD = true;

// Null (not a placeholder string) so Init.js applies its `||` fallback to
// draw.io's public converters. NOTE: that means diagram data leaves this origin
// on server-side PNG/PDF export and PlantUML render. Point these at your own
// jgraph/export-server and plantuml-server to keep it in-house.
window.EXPORT_URL = null;
window.PLANT_URL = null;

// Derived rather than hardcoded so this works on both the custom domain and
// the *.github.io fallback URL.
window.DRAWIO_BASE_URL = window.location.origin;
window.DRAWIO_LIGHTBOX_URL = window.location.origin;
window.DRAWIO_VIEWER_URL = window.location.origin + '/js/viewer.min.js';

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
