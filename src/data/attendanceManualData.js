export const ATTENDANCE_MANUAL_METADATA = {
  title: 'ARGUS ATTENDANCE INTELLIGENCE',
  subtitle: 'COMPLETE ENTERPRISE FEATURE GUIDE & OPERATING MANUAL',
  tagline: 'Next-Generation AI Biometrics, GPS Geofencing, Automated Payroll & Multi-Branch Operations',
  publisher: 'ARGUS CNC™ (Coimbatore, Tamil Nadu, India)',
  releaseDate: 'October 2026',
  heroImage: '/attendance-manual/fig0_dashboard.png',
  heroCaption: 'Figure 0: ARGUS Attendance Executive Operations Dashboard',
  pdfDownloadUrl: '/attendance-manual/argus-attendance-manual-v5.1.pdf'
};

export const PLATFORM_ADVANTAGES = [
  {
    title: 'Zero Proprietary Hardware',
    desc: 'Deploy instantly on laptops, tablets, or mobile phones without expensive finger scanner maintenance.'
  },
  {
    title: 'GPS Geofence Locking',
    desc: 'Enforces strict circular coordinate boundaries (100m to 500m) to guarantee punches occur only within verified workplace premises.'
  },
  {
    title: 'Single-Click Payroll & Payslips',
    desc: 'Automatically calculates normal work hours, late mark deductions, approved leaves, and overtime hours to generate statutory salary slips.'
  },
  {
    title: 'Multi-Branch Synchronization',
    desc: 'Consolidates data from headquarters, factories, branch offices, and field teams into a unified real-time dashboard.'
  },
  {
    title: 'Mobile Field Worker Tracking',
    desc: 'Delivers GPS check-in logging, customer visit verification, proof photos, and automated travel distance & petrol allowance accounting.'
  }
];

export const CAPABILITY_HIGHLIGHTS = [
  {
    component: 'Smart Face Recognition',
    tech: 'Sub-second optical identification',
    advantage: 'Staff can clock in touchlessly in milliseconds with accurate identity verification.'
  },
  {
    component: 'Real-Time Cloud Sync',
    tech: 'Secure cloud data synchronization',
    advantage: 'Attendance registers update instantly across headquarters, branch offices, and mobile phones.'
  },
  {
    component: 'Workplace GPS Protection',
    tech: 'Automated radius verification',
    advantage: 'Ensures staff punches are only accepted when physically inside workplace boundaries.'
  },
  {
    component: 'Automated Payroll Engine',
    tech: 'Built-in salary & statutory rules',
    advantage: 'Calculates overtime, leaves, advances, and produces professional printable payslips.'
  },
  {
    component: 'Mobile Field Operations',
    tech: 'Live route & client visit logging',
    advantage: 'Tracks client visits, location check-ins, and calculates travel distance allowances.'
  }
];

export const MANUAL_SECTIONS = [
  {
    id: 'section-1',
    number: '01',
    title: 'Multi-Tier Authentication & Access Portals',
    shortTitle: 'Authentication',
    badge: 'Security Gateways',
    summary: 'Security in the ARGUS ecosystem is built upon dedicated access portals. Each role (Company Administrators, Branch Managers, Field Staff, and Employees) has a simple, tailored interface to complete their tasks smoothly.',
    subsections: [
      {
        title: '1.1 Company Administration Login Gateway',
        text: 'The primary enterprise portal for managing day-to-day operations. Company Admins log in securely using their corporate email or Google Workspace single sign-on. The system automatically loads company policies, branch settings, and staff records.',
        image: '/attendance-manual/fig1_1_company_login.png',
        caption: 'Figure 1.1: Company Administration Login Portal with Google OAuth integration'
      },
      {
        title: '1.2 System Administration (Super Admin) Gateway',
        text: 'Super administrators manage company subscriptions, quotas, and platform configurations across client organizations through an isolated security barrier.',
        image: '/attendance-manual/fig1_2_superadmin_login.png',
        caption: 'Figure 1.2: Super Administration Access Gateway'
      },
      {
        title: '1.3 Employee Self-Service & Field Worker Mobile Portals',
        text: 'Specialized mobile-friendly screens allow employees to view attendance history, submit leave applications, download payslips, and check in during client visits.',
        dualImages: [
          {
            image: '/attendance-manual/fig1_3_employee_login.png',
            caption: 'Figure 1.3: Employee Self-Service Login'
          },
          {
            image: '/attendance-manual/fig1_4_field_login.png',
            caption: 'Figure 1.4: Field Worker Dedicated Mobile Login'
          }
        ]
      }
    ],
    callout: {
      type: 'security',
      title: 'Enterprise Authentication Highlights',
      bullets: [
        'Protected Passwords: Industry-standard security encryption protects all user accounts from unauthorized access.',
        'Seamless Sessions: Reliable, secure session tokens keep you signed in safely without annoying interruptions.',
        'Role Segregation: Staff only access their personal records, keeping managerial tools and payroll data private.'
      ]
    }
  },
  {
    id: 'section-2',
    number: '02',
    title: 'Executive Dashboard & Live Operational KPIs',
    shortTitle: 'Dashboard & KPIs',
    badge: 'Real-Time Telemetry',
    summary: 'The central ARGUS Dashboard provides operational leaders with an instant, real-time command center. Built with asynchronous data polling, it delivers immediate visibility into workforce readiness without manual page refreshing.',
    image: '/attendance-manual/fig0_dashboard.png',
    caption: 'Figure 2.1: Executive Command Dashboard displaying live KPI cards, percentage rings, and quick actions',
    metricsTable: [
      {
        metric: 'Active Staff Count',
        desc: 'Total number of active enrolled employees against authorized license limit.'
      },
      {
        metric: 'Present Today',
        desc: 'Real-time tally of staff who have successfully clocked in through the AI Kiosk or Mobile portal.'
      },
      {
        metric: 'Late Markings',
        desc: 'Identifies employees punching in after the configured grace period (e.g. 15 minutes past shift start).'
      },
      {
        metric: 'Absent Today',
        desc: 'Automatically computed based on shift schedules and unpunched roster records.'
      },
      {
        metric: 'Overtime Active',
        desc: 'Calculates employees continuing to work past standard shift hours for automated OT accrual.'
      },
      {
        metric: 'Attendance Ring',
        desc: 'Visual percentage representation of overall organizational presence for the active business day.'
      },
      {
        metric: 'Branch Switcher',
        desc: 'Instant navbar selector allowing management to toggle between consolidated view and individual branch offices.'
      }
    ]
  },
  {
    id: 'section-3',
    number: '03',
    title: 'AI Face Recognition Attendance Kiosk',
    shortTitle: 'AI Face Kiosk',
    badge: 'Biometric AI',
    summary: 'The Attendance Kiosk (/kiosk) represents the core biometric interface of the ARGUS platform. Running on any browser-equipped device (desktop terminal, dedicated wall-mounted Android tablet, or iPad), it continuously analyzes video streams to identify employees as they approach.',
    image: '/attendance-manual/fig3_1_kiosk_terminal.png',
    caption: 'Figure 3.1: AI Face Recognition Kiosk Terminal with live camera feed, target reticle, and punch status',
    features: [
      {
        title: 'Instant Face Detection & Alignment',
        desc: 'Detects employee faces instantly as they approach the screen, adjusting automatically to room lighting.'
      },
      {
        title: 'High-Accuracy Identity Matching',
        desc: 'Recognizes registered staff in less than a second, eliminating slow queues during peak shift changes.'
      },
      {
        title: 'Photo & Video Fraud Prevention',
        desc: 'Detects and rejects static paper photos or phone screen replays to ensure only real, physically present staff can punch.'
      },
      {
        title: 'Automatic IN / OUT Direction',
        desc: 'Intelligently determines whether an employee is clocking in or clocking out based on their previous punch of the day.'
      },
      {
        title: 'Instant Audio & Visual Confirmation',
        desc: 'Plays a clear sound chime and shows a green success card on-screen with the employee’s name and time.'
      }
    ],
    callout: {
      type: 'bestpractice',
      title: 'Kiosk Operational Best Practice',
      text: 'Place tablet kiosks at comfortable eye level (about 5 feet) near entrance doors or reception areas with standard indoor lighting for fast, effortless scanning.'
    },
    hasSimulator: true
  },
  {
    id: 'section-4',
    number: '04',
    title: 'Employee Directory & Biometric Enrollment',
    shortTitle: 'Staff Enrollment',
    badge: 'HR Directory',
    summary: 'The Employee Details module (/employee-details) provides comprehensive human resource records management. Administrators can search, filter by branch/department, view active quota allocations, and manage onboarding.',
    image: '/attendance-manual/fig4_1_employee_directory.png',
    caption: 'Figure 4.1: Employee Directory Roster displaying department badges, wage classification, and quick actions',
    subsections: [
      {
        title: 'Biometric Face Registration & Onboarding Modal',
        text: 'Clicking "New Entry" opens the enrollment dialog. Administrators configure employee demographics, shift assignments, and wage structures, while capturing reference facial photos via connected webcam or high-res photo upload.',
        image: '/attendance-manual/fig4_2_enrollment_modal.png',
        caption: 'Figure 4.2: Comprehensive Employee Enrollment Dialog with wage structure, PF/ESI parameters, and face enrollment'
      }
    ],
    parameters: [
      {
        param: 'Wage Basis',
        desc: 'Daily Wage or Monthly Fixed Salary with automatic daily rate conversion.'
      },
      {
        param: 'Statutory Allowances',
        desc: 'Base Salary, Dearness Allowance (DA), House Rent Allowance (HRA), and Conveyance.'
      },
      {
        param: 'Compliance Toggles',
        desc: 'PF (Provident Fund) and ESI (Employee State Insurance) deduction eligibility.'
      },
      {
        param: 'Overtime Rule',
        desc: 'Configurable OT rate multiplier (e.g. 1.0x or 1.5x) or complete OT exemption.'
      }
    ]
  },
  {
    id: 'section-5',
    number: '05',
    title: 'Real-Time Monitoring, Reports & Audit Overrides',
    shortTitle: 'Monitoring & Audit',
    badge: 'Compliance & Audit',
    summary: 'Complete transparency is provided through three complementary reporting views: the instant chronological Live Feed, the multi-filtered Historical Report, and the audit-logged Manual Entry tool.',
    subsections: [
      {
        title: '5.1 Real-Time Live Attendance Stream',
        text: 'The Live Report (/live-report) is an auto-refreshing surveillance stream. Every punch immediately displays the exact timestamp, employee name, branch location, IN/OUT tag, and live camera snapshot proof.',
        image: '/attendance-manual/fig5_1_live_stream.png',
        caption: 'Figure 5.1: Real-Time Live Attendance Feed with camera verification captures'
      },
      {
        title: '5.2 Historical Attendance Analytics & Reporting',
        text: 'The Attendance Report (/attendance-report) aggregates historical data over customizable date ranges. It analyzes total days present, half-days, late occurrences, total duty hours, and overtime accrued, with one-click export to Excel, CSV, or formatted PDF.',
        image: '/attendance-manual/fig5_2_historical_reports.png',
        caption: 'Figure 5.2: Historical Attendance Analytics with multi-parameter filtering and export toolbar'
      },
      {
        title: '5.3 Manual Entry & Audit Adjustments',
        text: 'When an employee forgets to clock out or undergoes off-site assignments, authorized supervisors can log manual attendance corrections through /manual-entry. To ensure strict compliance and prevent favoritism, all manual entries require mandatory supervisory notes and are permanently flagged in audit logs.',
        image: '/attendance-manual/fig5_3_manual_entry.png',
        caption: 'Figure 5.3: Manual Attendance Entry Screen with mandatory audit remarks'
      }
    ],
    callout: {
      type: 'compliance',
      title: 'Compliance & Tamper-Proof Audit Trail',
      text: 'Every attendance modification—whether created by AI facial detection, supervisor manual entry, or mobile check-in—records the initiating user, timestamp, client IP, and justification. This eliminates ghost employee fraud and satisfies strict ISO / labor audit requirements.'
    }
  },
  {
    id: 'section-6',
    number: '06',
    title: 'Leave Governance & Balance Tracking',
    shortTitle: 'Leaves & Balances',
    badge: 'Leave Governance',
    summary: 'ARGUS streamlines time-off administration with an integrated Leave & Permission workflow that connects employee applications directly to supervisor review desks and payroll calculations.',
    subsections: [
      {
        title: '6.1 Leave & Permission Review Workflow',
        text: 'Supervisors access /leave-permission to review pending applications. The sidebar dynamically displays real-time badge counters for unreviewed requests. Applications can be approved or rejected with written remarks in a single click.',
        image: '/attendance-manual/fig6_1_leave_workflow.png',
        caption: 'Figure 6.1: Leave & Permission Management Workspace with pending application badges'
      },
      {
        title: '6.2 Consolidated Balance Sheet',
        text: 'The Balance Report (/balance-report) delivers an executive summary of outstanding employee entitlements and liabilities, comparing statutory leave balances (CL, SL, EL) against consumed days and tracking open salary advance balances.',
        image: '/attendance-manual/fig6_2_balance_sheet.png',
        caption: 'Figure 6.2: Consolidated Employee Leave & Advance Balance Report'
      }
    ]
  },
  {
    id: 'section-7',
    number: '07',
    title: 'Automated Payroll, Advances & Payslips',
    shortTitle: 'Payroll & Payslips',
    badge: 'Statutory Payroll',
    summary: 'The ARGUS payroll module automates wage computation by linking verified attendance logs directly to salary disbursals, advance loan deductions, and statutory compliance withholdings.',
    subsections: [
      {
        title: '7.1 Salary Advance & Loan Management',
        text: 'Organizations can disburse salary advances through /advance-management. The system establishes automated repayment schedules, automatically deducting installment amounts from subsequent monthly payroll runs until fully liquidated.',
        image: '/attendance-manual/fig7_1_advance_ledger.png',
        caption: 'Figure 7.1: Salary Advance & Loan Installment Ledger'
      },
      {
        title: '7.2 Payment Entry & Disbursal Vouchers',
        text: 'The Payment Entry module (/payment-entry) records disbursements executed via Cash, Bank Transfer (NEFT/RTGS), or UPI, automatically generating digital payment vouchers and updating employee accounts.',
        image: '/attendance-manual/fig7_2_payment_vouchers.png',
        caption: 'Figure 7.2: Payment Entry & Voucher Disbursal Screen'
      },
      {
        title: '7.3 Automated Payslip Generation & Preview',
        text: 'Through /monthly-payslip, administrators generate audit-ready corporate payslips. The calculation engine aggregates present days, approved paid leaves, overtime hours, and allowances, while deducting PF, ESI, and advance installments to determine exact Net Pay.',
        image: '/attendance-manual/fig7_3_payslip_preview.png',
        caption: 'Figure 7.3: Corporate Payslip Preview with earnings, deductions, and one-click PDF export'
      },
      {
        title: '7.4 Monthly Salary Report (Master Payroll Register)',
        text: 'The Salary Report (/salary-report) provides the complete monthly payroll register across the entire enterprise, summarizing total gross payout, statutory deductions, net payable salaries, and bank transfer totals.',
        image: '/attendance-manual/fig7_4_salary_register.png',
        caption: 'Figure 7.4: Comprehensive Monthly Salary Report & Master Payroll Register'
      }
    ]
  },
  {
    id: 'section-8',
    number: '08',
    title: 'Enterprise Configuration & GPS Geofencing',
    shortTitle: 'Geofence & Shifts',
    badge: 'GPS Security',
    summary: 'Company Profile (/company-profile) enables management to configure shifts, define strict geofence perimeters, adjust biometric sensitivity, and automate executive email report delivery.',
    subsections: [
      {
        title: 'Corporate Profile Settings',
        text: 'Manage registered company entity, GSTIN, branch address, contact emails, and system branding.',
        image: '/attendance-manual/fig8_1_company_profile.png',
        caption: 'Figure 8.1: Corporate Profile Settings (GSTIN, Address, Contact Information)'
      },
      {
        title: 'Shift Scheduling, GPS Geofencing & AI Calibration',
        text: 'Scrolling into the configuration panel reveals granular policy parameters governing shifts and biometric capture.',
        image: '/attendance-manual/fig8_2_geofence_settings.png',
        caption: 'Figure 8.2: Shift Schedule, GPS Coordinate Locking, Geofence Radius, and Face Recognition Sensitivity'
      }
    ],
    parameters: [
      {
        param: 'Shift Hours & Grace Period',
        desc: 'Defines standard start/end times and allowable arrival delay (e.g. 15 minutes) before marking late.'
      },
      {
        param: 'GPS Coordinate Locking',
        desc: 'Captures factory or office Latitude & Longitude with a tamper-resistant lock mechanism.'
      },
      {
        param: 'Geofence Boundary (Meters)',
        desc: 'Enforces a strict radius (e.g. 150m to 200m) outside of which punches are automatically rejected.'
      },
      {
        param: 'Automated Email Reports',
        desc: 'Schedules daily morning digests and monthly master payroll summaries directly to executive inboxes.'
      }
    ]
  },
  {
    id: 'section-9',
    number: '09',
    title: 'Multi-Branch Network Management',
    shortTitle: 'Multi-Branch',
    badge: 'Enterprise Mesh',
    summary: 'For multi-location manufacturing enterprises, retail chains, and corporate offices, ARGUS provides the Multi-Branch Management Module (/manage-branches).',
    image: '/attendance-manual/fig9_1_branch_management.png',
    caption: 'Figure 9.1: Branch Management Directory showcasing multi-hub locations and individual geofence circles',
    features: [
      {
        title: 'Independent Geofences',
        desc: 'Each remote branch or factory unit maintains its own GPS coordinates and independent radius.'
      },
      {
        title: 'Designated Branch Managers',
        desc: 'Assign specific managerial personnel to oversee localized attendance and leave approvals.'
      },
      {
        title: 'Global Top-Navbar Switcher',
        desc: 'Corporate leaders can effortlessly switch between "All Branches" consolidated metrics and individual branch hubs with zero latency.'
      },
      {
        title: 'Branch-Filtered Reports',
        desc: 'Every report (Attendance, Live Stream, Salary Register) can be scoped specifically to a selected branch or viewed across the consolidated enterprise.'
      }
    ]
  },
  {
    id: 'section-10',
    number: '10',
    title: 'Mobile Field Worker GPS Tracking Module',
    shortTitle: 'Field Workers',
    badge: 'Mobile Logistics',
    summary: 'Traveling sales representatives, service engineers, and logistics personnel require flexible on-the-go tracking. The Field Worker Module (/field-worker) provides GPS route tracking, visit proofs, and automated travel expense accounting.',
    image: '/attendance-manual/fig10_1_field_worker.png',
    caption: 'Figure 10.1: Field Worker Operational Dashboard with real-time GPS check-ins, customer visits, and map route tracking',
    features: [
      {
        title: 'Live GPS Location Check-In',
        desc: 'Field staff clock in from remote client sites with device GPS coordinates reverse-geocoded to real street addresses.'
      },
      {
        title: 'Customer Visit Logging',
        desc: 'Records client company name, contact person, meeting discussion summary, and order details.'
      },
      {
        title: 'Photo Proof of Visit',
        desc: 'Captures camera snapshots at the customer site to eliminate fictitious client visits.'
      },
      {
        title: 'Travel Route & Petrol Allowance Engine',
        desc: 'Computes cumulative daily kilometers traveled between visit stops and automatically calculates petrol reimbursement based on company fuel rates (e.g. ₹4.50/km).'
      }
    ]
  },
  {
    id: 'section-11',
    number: '11',
    title: 'Support Desk & Super Admin Fleet Administration',
    shortTitle: 'Super Admin',
    badge: 'SaaS Multi-Tenancy',
    summary: 'To guarantee 99.9% enterprise uptime, ARGUS embeds a dedicated Customer Support Desk for end-users and a centralized Super Admin control console for SaaS platform operators.',
    subsections: [
      {
        title: '11.1 Customer Support Ticket Desk',
        text: 'Company Admins can submit technical questions, feature requests, or hardware calibration assistance directly through /support. Tickets receive immediate tracking numbers and priority classifications.',
        image: '/attendance-manual/fig11_1_support_desk.png',
        caption: 'Figure 11.1: Integrated Enterprise Support Help Desk with active ticket history'
      },
      {
        title: '11.2 Super Admin Multi-Tenant Fleet Management',
        text: 'Through /manage-companies, system administrators monitor client tenants, toggle modular feature packages (Single Company, Multi-Branch, Field Worker), adjust employee limits, and review platform-wide analytics.',
        image: '/attendance-manual/fig11_2_superadmin_companies.png',
        caption: 'Figure 11.2: Super Admin Client Company Management Console'
      },
      {
        title: '11.3 Super Admin Client Fleet Directory & Support Console',
        text: 'Super admins can inspect the full fleet of onboarded organizations, modify subscription statuses, and respond directly to customer assistance tickets.',
        dualImages: [
          {
            image: '/attendance-manual/fig11_3_superadmin_roster.png',
            caption: 'Figure 11.3: Super Admin Tenant Roster'
          },
          {
            image: '/attendance-manual/fig11_4_support_resolution.png',
            caption: 'Figure 11.4: Super Admin Support Resolution Desk'
          }
        ]
      }
    ]
  },
  {
    id: 'section-12',
    number: '12',
    title: 'Data Privacy, Security & Platform Reliability',
    shortTitle: 'Security & Privacy',
    badge: 'Enterprise Security',
    summary: 'The ARGUS platform is built with bank-grade security and strict data privacy, ensuring reliable daily performance for your company.',
    securitySpecs: [
      {
        domain: 'Biometric Privacy',
        standard: 'Encrypted Biometric Signatures',
        benefit: 'Raw face photos are never stored or reconstructible, guaranteeing employee personal privacy.'
      },
      {
        domain: 'Account Security',
        standard: 'Encrypted Logins & Google SSO',
        benefit: 'Strong access controls protect managerial settings and salary records from unauthorized users.'
      },
      {
        domain: 'Workplace Geofencing',
        standard: 'Precise GPS Distance Verification',
        benefit: 'Ensures staff punches only register when they are physically at their assigned work site.'
      },
      {
        domain: 'Hardware Flexibility',
        standard: 'Web Browser, Windows PC, Android & iPhone',
        benefit: 'Deploy effortlessly on existing company laptops, tablets, or phones without lock-in.'
      },
      {
        domain: 'Cloud Reliability & Backup',
        standard: 'Continuous Cloud Backups with 99.9% Uptime',
        benefit: 'Your company attendance and payroll records are always backed up and available anytime.'
      }
    ],
    contactInfo: {
      division: 'ARGUS CNC™ — ADVANCED AUTOMATION & SOFTWARE DIVISION',
      location: 'Headquarters: Coimbatore, Tamil Nadu, India',
      web: 'www.argussoftwares.com',
      email: 'technologiesargus@gmail.com',
      copyright: '© 2026 ARGUS CNC™. All Rights Reserved. Enterprise Operating Manual.'
    }
  }
];
