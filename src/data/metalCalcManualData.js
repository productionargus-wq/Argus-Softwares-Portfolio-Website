export const METALCALC_MANUAL_METADATA = {
  title: 'Metal Calculator & Quotation Suite',
  subtitle: 'Complete System User Manual, Technical Specifications & Visual Feature Guide',
  tagline: 'High-precision production-grade estimation and commercial quotation platform for CNC machine shops, precision fabricators, toolmakers, and metal component manufacturers.',
  version: 'Version 7.5.0 (Full-Stack Enterprise Edition)',
  organisation: 'Argus Technologies (GSTIN: 33CZEPS8675J1ZN)',
  scope: 'Comprehensive feature-by-feature visual walkthrough with high-resolution system screenshots.',
  releaseDate: 'October 2026',
  publisher: 'ARGUS TECHNOLOGIES (Coimbatore, Tamil Nadu, India)',
  heroImage: '/metalcalc-manual/mod02_calculator.png',
  heroCaption: 'Figure 2: Argus Metal Calculator & Vector CAD Blueprint Engine',
  pdfDownloadUrl: '/metalcalc-manual/argus-metalcalc-manual-v7.5.0.pdf'
};

export const METALCALC_EXECUTIVE_SUMMARY = {
  text: 'The Argus Metal Calculator & Quotation Suite is a high-precision, production-grade estimation and commercial quotation platform designed specifically for CNC machine shops, precision fabricators, toolmakers, and metal component manufacturers. It unifies metallurgical weight calculations with an interactive Bill of Materials (BOM) engine, AI-powered 2D blueprint cycle time estimation, live commodity market prices, granular role-based user controls, multi-entity branding, and GST-compliant quotation document generation.',
  highlights: [
    { title: '8 Geometric Profiles', desc: 'Round, pipe, square, hex, flat bar, tube, ring, and sheet metal.' },
    { title: 'Pre-Calibrated Densities', desc: 'Mild steel, stainless 304/316, aluminium, brass, copper, and tool steels.' },
    { title: 'Gemini AI Vision', desc: '2D blueprint feature extraction, cycle times, and operational sequencing.' },
    { title: 'Statutory GST Engine', desc: 'Appyflow API verification with automatic CGST, SGST, and IGST rules.' },
    { title: 'Direct Email Dispatch', desc: 'Integrated Resend transactional email API with customer delivery logs.' },
    { title: 'Desktop Executable', desc: 'Standalone single-file MetalCalculator.exe bundling Node 20 & WebView2.' }
  ]
};

export const METALCALC_MODULES = [
  {
    id: 'module-01',
    number: '01',
    title: 'Multi-Tenant Enterprise Authentication & Onboarding',
    shortTitle: 'Authentication',
    badge: 'Secure Access Gateway',
    summary: 'The authentication gateway provides a secure, multi-tenant portal with three distinct access tiers: Organisation Administrator, Standard Employee User, and Super Administrator. It features seamless integration with Indian GSTIN public registries for instant one-click enterprise onboarding.',
    image: '/metalcalc-manual/mod01_login.png',
    caption: 'Figure 1: Multi-Tenant Enterprise Authentication Portal & Workspace Gateway',
    specs: [
      { label: 'Authentication Modes', value: 'Dual Sign-in: GSTIN / Username & Password, plus One-Click Google Workspace OAuth2 (GIS).' },
      { label: 'Instant GSTIN Verification', value: 'Integrated with Appyflow GST API. Typing a 15-character GSTIN automatically pulls legal entity name, trade name, and tax jurisdiction state.' },
      { label: 'Role-Based Permissions', value: 'Enforces strict RBAC: Standard employees operate under organisation rules, restricting access to sensitive financial settings, customer master lists, or margin figures.' },
      { label: 'Legal Compliance Hub', value: 'Interactive modals for Data Privacy Policy, Terms of Service, and SOC2/ISO-aligned Security & Encryption guarantees.' }
    ],
    tip: {
      type: 'efficiency',
      title: 'EFFICIENCY TIP',
      text: 'Entering an active GSTIN automatically verifies the enterprise against central tax databases, establishing verified company records in less than 2 seconds.'
    }
  },
  {
    id: 'module-02',
    number: '02',
    title: 'Metal Weight Calculator & Vector CAD Blueprint Engine',
    shortTitle: 'Metal Calculator',
    badge: 'Core Engineering Calculation',
    summary: 'The Metal Calculator is the engineering backbone of the application. It computes high-precision volumetric weight, gross billet mass, scrap recovery salvage value, and raw material procurement costs across 8 geometric profiles. A parametric vector SVG blueprint dynamically updates in real time to visualize input dimensions.',
    image: '/metalcalc-manual/mod02_calculator.png',
    caption: 'Figure 2: Metal Weight Calculator with Parametric Vector SVG Blueprint',
    hasCalculator: true,
    specs: [
      { label: 'Supported Shapes', value: 'Round Bar / Wire, Square Bar, Hexagonal Bar, Flat Bar / Plate, Hollow Pipe / Tube, Square Hollow Section, Circular Ring, Sheet Metal.' },
      { label: 'Metallurgical Density Library', value: 'Pre-calibrated densities: Carbon Steel / Mild Steel (7.85 g/cm³), Stainless Steel 304/316 (8.00 g/cm³), Aluminium Alloys (2.70 g/cm³), Brass (8.50 g/cm³), Copper (8.96 g/cm³), Tool Steels.' },
      { label: 'Dynamic SVG Blueprint', value: 'Parametric vector blueprint renders technical dimension callout lines matching operator input parameters (diameter, width, length, wall thickness).' },
      { label: 'Scrap Value Recovery', value: 'Calculates net component weight vs gross billet raw weight, applying swarf/scrap recovery percentages to offset raw material cost.' },
      { label: 'Live Metals-API Ticker', value: 'Real-time daily metal market commodity pricing ticker ensures quotations reflect current volatile raw material market rates.' }
    ],
    tip: {
      type: 'workflow',
      title: 'WORKFLOW TIP',
      text: "Clicking 'Add to Quotation BOM' instantly transfers the calculated piece weight, raw material rate, and dimensions into the active commercial quote with zero manual re-typing."
    }
  },
  {
    id: 'module-03',
    number: '03',
    title: 'Commercial Quotation Maker & Costing Suite',
    shortTitle: 'Quotation Maker',
    badge: 'Commercial Estimation Engine',
    summary: 'The Commercial Quotation Maker unifies client billing particulars, multi-item Bill of Materials (BOM), comprehensive machining process routings, bought-out accessories, and dynamic profit markups into a unified, statutory GST-compliant quotation builder.',
    image: '/metalcalc-manual/mod03_quotation.png',
    caption: 'Figure 3: Commercial Quotation Maker & Statutory Costing Suite',
    specs: [
      { label: 'Smart Client Header', value: 'Select saved clients from the database. System automatically verifies interstate vs intrastate GST (CGST 9% + SGST 9% vs IGST 18%) based on recipient state code.' },
      { label: 'Interactive BOM Ledger', value: 'Multi-item raw material schedule tracking shape, size, quantity, unit piece weight, raw material cost/kg, and extended raw material subtotal.' },
      { label: 'Machining Routing Engine', value: 'Operations schedule covering VMC 3/4/5-Axis, CNC Turning, Wire EDM, Surface & Cylindrical Grinding, Drilling, Laser Cutting, Heat Treatment, and Surface Finishing.' },
      { label: 'Dynamic Margin Slider', value: 'Interactive profit margin slider dynamically calculates markup value, unit cost vs selling price, gross profit margin %, subtotal, and tax totals in real time.' },
      { label: 'Terms & Conditions Injector', value: 'One-click injection of standardized commercial terms (Advance, Net 30, Validity, Delivery Lead Time) and custom project remarks.' }
    ],
    tip: {
      type: 'statutory',
      title: 'STATUTORY TIP',
      text: 'The system auto-formats quotation numbers (e.g. MS-Q-1793...) and prevents commercial leakage by ensuring tax rates match state jurisdictions exactly.'
    }
  },
  {
    id: 'module-04',
    number: '04',
    title: 'Technical Workings Sheet (Deep Engineering Breakdown)',
    shortTitle: 'Workings Sheet',
    badge: 'Manufacturing Cost Analysis',
    summary: 'The Technical Workings Sheet provides an engineering-level breakdown of the active product or assembly. It separates raw manufacturing expenses from commercial margins, enabling estimation engineers, workshop supervisors, and managing directors to audit cycle times, setup overheads, and machine hourly charges.',
    image: '/metalcalc-manual/mod04_workings.png',
    caption: 'Figure 4: Technical Workings Sheet with Machine Center Hourly Breakdown',
    specs: [
      { label: 'Billet & Material Analysis', value: 'Calculates gross raw billet weight required per piece, machining swarf generation, and salvage scrap credit.' },
      { label: 'Machine Hourly Rates', value: 'Configures specific hourly billing rates per machining center (e.g. ₹650/hr for 3-Axis VMC, ₹1200/hr for 5-Axis, ₹450/hr for CNC Lathe).' },
      { label: 'Setup & Fixture Overhead', value: 'Apportions programming time, jig/fixture fabrication fees, and setup machine downtime across the production batch quantity.' },
      { label: 'Direct vs Quoted Price', value: 'Direct visual comparison between pure manufacturing cost (materials + machine run time + tooling) versus final quoted customer price.' }
    ],
    tip: {
      type: 'audit',
      title: 'AUDIT TIP',
      text: 'Use the Workings Sheet during internal engineering reviews to verify tool wear allowances and cycle time estimates before signing off on large production runs.'
    }
  },
  {
    id: 'module-05',
    number: '05',
    title: 'AI-Powered 2D Engineering Drawing Cycle Time Estimator',
    shortTitle: 'AI Drawing Estimator',
    badge: 'Computer Vision Machining AI',
    summary: 'Integrated directly with Google Gemini AI Multimodal Vision, this module eliminates hours of manual drawing analysis. Engineers upload 2D PDF engineering drawings, scanned CAD blueprints, or image files (PNG/JPG). The AI inspects tolerances, dimensions, internal pockets, threads, and surface finishes to predict operational machining cycle times.',
    image: '/metalcalc-manual/mod05_ai_estimator.png',
    caption: 'Figure 5: Google Gemini AI Multimodal 2D Blueprint Analysis Modal',
    specs: [
      { label: 'Supported Drawing Formats', value: 'PDF, PNG, JPG, JPEG, TIFF engineering drawings, CAD exports, and fabrication blueprints.' },
      { label: 'Feature Inspection Engine', value: 'Automatically identifies outer contours, inner bores, tapped holes, counterbores, surface finish Ra requirements, and tight tolerances (H7, g6).' },
      { label: 'Operational Route Suggestion', value: 'Predicts optimal operation sequencing: Facing -> Rough Turning -> Finish Turning -> VMC Pocketing -> Threading -> Grinding.' },
      { label: 'Cycle Time Estimation', value: 'Outputs estimated cycle times in minutes per setup, setup changeover allowance, and recommended cutting parameters (cutting speed Vc, feed f).' }
    ],
    tip: {
      type: 'productivity',
      title: 'PRODUCTIVITY BOOST',
      text: 'The AI Estimator reduces rapid-fire RFQ turnaround from an average of 45 minutes down to less than 30 seconds per complex engineering component.'
    }
  },
  {
    id: 'module-06',
    number: '06',
    title: 'Client Directory & CRM Customer Master',
    shortTitle: 'Clients CRM',
    badge: 'Customer Relationship Management',
    summary: 'The Client Directory is an enterprise customer repository supporting over 300+ industrial clients. It features dual view modes (Interactive Card Grid vs Compact Sortable Data Table), automated GSTIN validation, multiple contact persons, direct quotation launchers, and full export capabilities.',
    image: '/metalcalc-manual/mod06_clients.png',
    caption: 'Figure 6: Centralized Client Directory with Dual Grid & List Modes',
    specs: [
      { label: 'Dual View Modes', value: 'Toggle between Card Grid View (ideal for touchscreens and quick visual browsing) and Compact List Table (optimized for rapid data searching and keyboard navigation).' },
      { label: 'GSTIN Auto-Fetch & Parsing', value: 'Single click pulls legal business names, registered state codes, and verified factory addresses directly from central registries.' },
      { label: 'Multi-Contact Support', value: 'Store multiple purchase managers, accounts contacts, mobile numbers, and direct dispatch emails per client record.' },
      { label: '1-Click Quotation Creation', value: "Clicking 'Create Quote' on any client card immediately initializes a new commercial quotation pre-populated with buyer details and appropriate tax schemes." }
    ],
    tip: {
      type: 'usability',
      title: 'USABILITY TIP',
      text: 'Clients are searchable by company name, GSTIN, city, or phone number. Switching between Grid and List view persists across browser sessions.'
    }
  },
  {
    id: 'module-07',
    number: '07',
    title: 'Products & Component Assemblies Master',
    shortTitle: 'Products Catalog',
    badge: 'Standard Parts & Assemblies Catalog',
    summary: 'For repeat manufacturing components, custom machinery parts, and proprietary assemblies, the Products Directory stores pre-configured BOMs, standard cutting routes, and unit prices. Assemblies can be added directly into quotations with a single click.',
    image: '/metalcalc-manual/mod07_products.png',
    caption: 'Figure 7: Product & Pricing Library for Standard Machinery Components',
    specs: [
      { label: 'Standard Parts Catalog', value: 'Store recurrently machined parts (Shafts, Flanges, Bushes, Spindles, Tooling Blocks) with complete dimensional and material specifications.' },
      { label: 'Embedded BOM & Operations', value: 'Each product retains its complete engineering recipe: raw material billets, VMC machining programs, wire cut timings, and surface finishing.' },
      { label: 'Instant Quotation Fast-Load', value: 'Load high-complexity parts into new customer quotations in 1 second, bypassing manual bill-of-material entry.' },
      { label: 'Bulk Management & Search', value: 'Fast filtering by product name, part code, HSN classification, and category, with bulk deletion and Excel import/export.' }
    ],
    tip: {
      type: 'bestpractice',
      title: 'BEST PRACTICE',
      text: 'Save standard parts to the Product Master after finalizing your first prototype run to ensure consistent quotation pricing across your sales team.'
    }
  },
  {
    id: 'module-08',
    number: '08',
    title: 'Terms & Conditions Master Template Library',
    shortTitle: 'Terms Library',
    badge: 'Commercial Terms & Legal Clauses',
    summary: 'Commercial terms protect manufacturers from raw material price swings, payment defaults, and delivery ambiguities. The Terms Library allows organisations to create, standardize, and maintain multiple commercial clause templates that automatically insert into finalized quotation PDFs.',
    image: '/metalcalc-manual/mod08_terms.png',
    caption: 'Figure 8: Commercial Terms & Conditions Master Template Library',
    specs: [
      { label: 'Pre-Loaded Commercial Templates', value: 'Standard Commercial Terms (50% Advance / 50% dispatch), 100% Advance Payment Terms, Credit Net 30/60 Days, Annual Maintenance & Tooling Agreements.' },
      { label: 'Material Escalation Clauses', value: 'Standardized clauses addressing 7-day quotation validity due to volatile domestic and international metal commodity price shifts.' },
      { label: 'Default Designation', value: 'Set a primary default terms template that loads automatically on every new quotation, while allowing quick switching per customer requirement.' },
      { label: 'Custom Variable Fields', value: 'Easily customize delivery lead time (e.g. 2-3 weeks from PO), transit insurance responsibility, and warranty coverage.' }
    ],
    tip: {
      type: 'risk',
      title: 'RISK MANAGEMENT',
      text: 'Ensure the 7-day validity clause is active on all raw-material-heavy quotes to protect against London Metal Exchange (LME) and domestic ingot price surges.'
    }
  },
  {
    id: 'module-09',
    number: '09',
    title: 'Quotation History Archive & Email Dispatch',
    shortTitle: 'Quote History',
    badge: 'Quotation Audit & Customer Delivery',
    summary: 'The Quotation History Directory is a centralized, searchable ledger of all issued quotations. Users can inspect line-item breakdowns via the interactive summary modal, regenerate PDFs on demand, and email quotations directly to customers using the integrated Resend API mail server.',
    image: '/metalcalc-manual/mod09_history.png',
    caption: 'Figure 9: Saved Quotation History Archive with Resend Email Dispatch',
    specs: [
      { label: 'Comprehensive Audit Trail', value: 'Maintains chronological logs of every generated quotation (e.g. MS-Q-92), creation date, author (@priya, @philip_matthew), customer, and grand total.' },
      { label: 'Interactive Summary Modal', value: 'Clicking any quote opens an instant breakdown modal detailing BOM lines, machining processes, taxes, and customer addresses without opening edit mode.' },
      { label: 'One-Click PDF Re-Generation', value: 'Regenerate pixel-perfect official PDF documents anytime with updated exchange rates or reprint previous revisions.' },
      { label: 'Integrated Email Dispatch', value: 'Directly email quotations to customer inboxes via Resend API with custom subject line, personalized body text, and attached official quotation PDF.' }
    ],
    tip: {
      type: 'dispatch',
      title: 'DISPATCH TIP',
      text: 'The integrated email service eliminates the need to download PDFs and open external email clients, logging exact send timestamps for dispatch proof.'
    }
  },
  {
    id: 'module-10',
    number: '10',
    title: 'Team Management & Role-Based Access Control (RBAC)',
    shortTitle: 'Team RBAC',
    badge: 'Multi-User Governance',
    summary: 'As machine shops grow, multiple estimation engineers, sales representatives, and workshop supervisors collaborate on customer quotes. The Team Directory manages multi-user seats with granular Role-Based Access Controls (RBAC).',
    image: '/metalcalc-manual/mod10_team.png',
    caption: 'Figure 10: Multi-User Seats & Granular Role-Based Access Control Directory',
    specs: [
      { label: 'Organisation Access Code', value: 'Each approved organisation has a secure alphanumeric Access Code (e.g. ARGU-2753). New team members join the organisation instantly using this code.' },
      { label: 'Granular Permission Toggles', value: 'Admins toggle specific capabilities per employee: canAccessCalculator, canAccessQuotation, canViewClients, canEditClients, canAccessProducts, canAccessHistory, canAccessSettings.' },
      { label: 'Financial Protection', value: 'Prevent junior estimators from viewing or altering bottom-line profit percentages, company bank details, or sensitive client master lists.' },
      { label: 'User Accountability', value: 'Every quotation created in the suite logs the specific username (e.g. Created by @priya) for complete traceability and performance tracking.' }
    ],
    tip: {
      type: 'security',
      title: 'SECURITY NOTICE',
      text: "Restrict 'canAccessSettings' to managing directors to prevent accidental alterations of company bank account details or digital signatures."
    }
  },
  {
    id: 'module-11',
    number: '11',
    title: 'Organisation Settings & White-Label Branding',
    shortTitle: 'Org Settings',
    badge: 'Enterprise Customization & Legal Profile',
    summary: 'The Organisation Settings module establishes your enterprise\'s visual identity, legal standing, and banking particulars. It supports multiple sub-companies / sister concerns, high-resolution logo uploads, and authorized signatory digital seals.',
    image: '/metalcalc-manual/mod11_settings.png',
    caption: 'Figure 11: Company Profile, GSTIN Master & Authorized Digital Signature Settings',
    specs: [
      { label: 'Legal Entity Master', value: 'Configure Legal Organisation Name, GSTIN (33CZEPS8675J1ZN), PAN number, Official Dispatch Emails, and Primary Registered Works Address.' },
      { label: 'Brand Assets Upload', value: 'Upload high-resolution transparent corporate logos and official authorized signatory digital seals for automatic placement on quotation headers and footers.' },
      { label: 'Multi-Entity Sister Concerns', value: 'Add subsidiary entities or sister machine shops with distinct GSTINs, addresses, and branding, switching between them during quotation drafting.' },
      { label: 'Banking & RTGS Details', value: 'Save Bank Name, Current Account Number, IFSC Code, and Branch information for automated insertion into customer quotation payment instructions.' }
    ],
    tip: {
      type: 'branding',
      title: 'BRANDING TIP',
      text: 'Upload your company logo and digital signature in high-resolution PNG format with transparent backgrounds for the crispest PDF rendering.'
    }
  },
  {
    id: 'module-12',
    number: '12',
    title: 'Professional PDF Quotation Engine & Document Themes',
    shortTitle: 'PDF Themes',
    badge: 'Document Generation & Live Preview',
    summary: 'Quotation presentation is decisive in winning high-value manufacturing contracts. The suite features an advanced PDF generation engine offering multiple designer themes, custom color accents, and a real-time Global Live PDF Preview modal.',
    image: '/metalcalc-manual/mod12_pdf_themes.png',
    caption: 'Figure 12: Professional PDF Quotation Engine with Theme & Live Preview Modals',
    specs: [
      { label: 'Multiple Layout Themes', value: 'Choose between Modern Blue Corporate, Industrial Blueprint, Classic Elegance, and Clean Minimal layouts tailored for engineering tenders.' },
      { label: 'Dynamic Brand Accent Colors', value: 'Select custom brand accent colors (Argus Orange, Tech Blue, Forest Emerald, Slate Titanium) to match your corporate identity.' },
      { label: 'Live Global PDF Preview', value: 'Inspect the full multi-page quotation document inside the application before printing or emailing, ensuring formatting perfection.' },
      { label: 'Statutory Tax Breakdown', value: 'Complies with Indian GST standards: line-by-line HSN/SAC codes, CGST, SGST, IGST totals, reverse charge declarations, and bank remittance info.' }
    ],
    tip: {
      type: 'presentation',
      title: 'PRESENTATION TIP',
      text: "Use the 'Modern Corporate' theme with vibrant accent highlights for commercial tenders, and 'Industrial Blueprint' for detailed technical tooling submissions."
    }
  }
];

export const TECHNICAL_SPECIFICATIONS = [
  { spec: 'Application Architecture', benchmark: 'Full-Stack Node.js Express Backend, Vanilla JS Responsive SPA, PyWebView Desktop Wrapper' },
  { spec: 'Database Layer', benchmark: 'MongoDB Atlas Enterprise Cloud Cluster with automatic failover, cold-start pre-warming, and local caching' },
  { spec: 'AI Multimodal Model', benchmark: 'Google Gemini AI Vision API for 2D engineering drawing cycle time and tooling parameter extraction' },
  { spec: 'Commodity Pricing API', benchmark: 'Metals-API Daily Real-Time Commodity Feed for Carbon Steel, Stainless Steel, Aluminium, Copper, Brass' },
  { spec: 'GST Integration', benchmark: 'Appyflow Indian Goods & Services Tax (GST) Verification API for automated trade name and address resolution' },
  { spec: 'Email Delivery Service', benchmark: 'Resend Transactional Email API for direct PDF attachment dispatch with deliverability logging' },
  { spec: 'Desktop Runtime', benchmark: 'Standalone single-file executable (MetalCalculator.exe) bundling Node 20 runtime and EdgeChromium WebView2' },
  { spec: 'Supported Platforms', benchmark: 'Windows 10/11 Desktop, macOS, Linux, and Modern Web Browsers (Chrome, Edge, Safari, Firefox)' }
];

export const DIVISION_INFO = {
  division: 'ARGUS TECHNOLOGIES • ENTERPRISE CNC SOFTWARE DIVISION',
  location: 'Headquarters: Coimbatore, Tamil Nadu, India',
  web: 'www.arguscnc.com',
  email: 'technologiesargus@gmail.com',
  tagline: 'Precision CNC Machining • VMC Tooling • Advanced Manufacturing Software Solutions',
  copyright: '© 2026 Argus Technologies. All Rights Reserved. Confidential & Proprietary Operating Manual.'
};
