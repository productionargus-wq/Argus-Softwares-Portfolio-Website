export const SECTIONS_CONFIG = [
  { id: 'products', name: 'Products', rail: 'left', icon: 'Package', color: '#ff5500', colorClass: 'orange' },
  { id: 'metalcalc', name: 'MetalCalc', rail: 'left', icon: 'Calculator', color: '#0072f5', colorClass: 'blue' },
  { id: 'erp', name: 'ERP', rail: 'left', icon: 'Database', color: '#7828c8', colorClass: 'purple' },
  { id: 'solutions', name: 'Solutions', rail: 'left', icon: 'LayoutGrid', color: '#00a87a', colorClass: 'teal' },
  { id: 'attendance', name: 'Attendance', rail: 'right', icon: 'Users', color: '#00a87a', colorClass: 'teal' },
  { id: 'downloads', name: 'Downloads', rail: 'right', icon: 'Download', color: '#ff5500', colorClass: 'orange' },
  { id: 'testimonials', name: 'Testimonials', rail: 'right', icon: 'MessageSquareQuote', color: '#f59e0b', colorClass: 'amber' },
  { id: 'support', name: 'Support', rail: 'right', icon: 'Headset', color: '#0072f5', colorClass: 'blue' },
  { id: 'contact', name: 'Contact', rail: 'right', icon: 'Mail', color: '#7828c8', colorClass: 'purple' }
];

export const SECTION_KEYS = SECTIONS_CONFIG.map(s => s.id);
