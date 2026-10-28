export const PRODUCTS_DOWNLOAD_DATA = {
  metalcalc: {
    id: 'metalcalc',
    title: 'MetalCalc',
    tagline: 'Engineering & Machine Shop Weight Calculator',
    version: 'v1.1.1',
    releaseTag: 'v1.0.0',
    releaseDate: 'October 27, 2026',
    license: 'Commercial / Offline Standalone',
    changelog: [
      'Official standalone executable release for Windows desktop',
      'Universal macOS DMG installer build',
      'Android APK mobile package for shop-floor reference',
      'iOS IPA distribution build'
    ],
    platforms: {
      windows: {
        id: 'windows',
        name: 'Windows',
        osTitle: 'Windows Desktop (64-bit)',
        extension: '.exe',
        fileName: 'MetalCalculator-standalone.exe',
        fileSize: '43.8 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Argus-Portfolio-Website/releases/download/v1.0.0/MetalCalculator-standalone.exe',
        requirements: 'Windows 11 / 10 (64-bit), 4 GB RAM, 100 MB disk space',
        sha256: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08',
        isPrimary: true
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        osTitle: 'macOS Universal',
        extension: '.dmg',
        fileName: 'MetalCalculator.dmg',
        fileSize: '44.3 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Argus-Portfolio-Website/releases/download/v1.0.0/MetalCalculator.dmg',
        requirements: 'macOS 12.0 Monterey or later (Apple Silicon M-Series & Intel)',
        sha256: '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'
      },
      android: {
        id: 'android',
        name: 'Android',
        osTitle: 'Android Mobile & Tablet',
        extension: '.apk',
        fileName: 'app-release.apk',
        fileSize: '6.05 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Argus-Portfolio-Website/releases/download/v1.0.0/app-release.apk',
        requirements: 'Android 8.0 (Oreo) or later',
        sha256: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a'
      },
      ios: {
        id: 'ios',
        name: 'iOS / iPadOS',
        osTitle: 'iPhone & iPad',
        extension: '.ipa',
        fileName: 'MetalCalculator-unsigned.ipa',
        fileSize: '3.87 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Argus-Portfolio-Website/releases/download/v1.0.0/MetalCalculator-unsigned.ipa',
        requirements: 'iOS 15.0 or later (Direct Enterprise / TestFlight build)',
        sha256: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d'
      },
      linux: {
        id: 'linux',
        name: 'Linux',
        osTitle: 'Linux (x86_64)',
        extension: '.deb / .AppImage',
        fileName: 'MetalCalc-v1.1.1-amd64.deb',
        fileSize: '43.8 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Argus-Portfolio-Website/releases/download/v1.0.0/MetalCalculator-standalone.exe',
        requirements: 'Ubuntu 20.04+, Debian 11+, Fedora 36+, or Arch Linux',
        sha256: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
      }
    }
  },

  attendance: {
    id: 'attendance',
    title: 'ARGUS Attendance App',
    tagline: 'Workforce Shift Tracking, Geofencing & Biometric Sync',
    version: 'v1.6.0',
    releaseTag: 'v1.6.0',
    releaseDate: 'October 2026',
    license: 'Subscription / Enterprise Biometric',
    changelog: [
      'LAN and Cloud biometric device background polling synchronizer',
      'Contactless QR code and geofenced smartphone shift punch-in',
      'Automated late arrival, half-day, and overtime compliance reports',
      'One-click export to Excel, CSV, and payroll formats'
    ],
    platforms: {
      windows: {
        id: 'windows',
        name: 'Windows',
        osTitle: 'Windows Desktop Admin Console',
        extension: '.exe',
        fileName: 'ArgusAttendance-Admin-v1.6.0-Setup.exe',
        fileSize: '62.4 MB',
        requirements: 'Windows 10 / 11 (64-bit), LAN connection to biometric hardware',
        sha256: '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae',
        isPrimary: true
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        osTitle: 'macOS Admin Dashboard',
        extension: '.dmg',
        fileName: 'ArgusAttendance-Console-v1.6.0.dmg',
        fileSize: '58.1 MB',
        requirements: 'macOS 12.0 Monterey or later',
        sha256: 'fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9'
      },
      android: {
        id: 'android',
        name: 'Android',
        osTitle: 'Android Employee & Guard Punch App',
        extension: '.apk',
        fileName: 'ArgusAttendance-Punch-v1.6.0.apk',
        fileSize: '16.2 MB',
        requirements: 'Android 8.0 or later with GPS & Camera support',
        sha256: 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3'
      },
      ios: {
        id: 'ios',
        name: 'iOS',
        osTitle: 'iOS Employee App',
        extension: '.ipa',
        fileName: 'ArgusAttendance-v1.6.0.ipa',
        fileSize: '21.5 MB',
        requirements: 'iOS 15.0 or later',
        sha256: 'b3a8e0e1f9ab1bfe3a36f231f676f78bb30a519d2b21e6c530c0eee8ebb4a5d0'
      }
    }
  },

  erp: {
    id: 'erp',
    title: 'ARGUS ERP Business Suite',
    tagline: 'End-to-End Plant Operations, Stock, Purchases & Invoicing',
    version: 'v2.4.3',
    releaseTag: 'v2.4.3',
    releaseDate: 'October 2026',
    license: 'Enterprise Plant Deployment',
    changelog: [
      'Multi-warehouse raw stock, semi-finished goods, and scrap allocation',
      'Supplier Purchase Requisition to GRN quality inspection workflow',
      'GST compliant tax invoicing, E-Way bill generation, and delivery packing slips',
      'Multi-department granular role permissions and audit logs'
    ],
    platforms: {
      windows: {
        id: 'windows',
        name: 'Windows',
        osTitle: 'Windows Server & Workstation Suite',
        extension: '.exe / .msi',
        fileName: 'ArgusERP-ServerClient-v2.4.3-Setup.exe',
        fileSize: '112.5 MB',
        secondaryFile: 'ArgusERP-ClientDeploy-v2.4.3.msi (78.0 MB)',
        requirements: 'Windows 10 / 11 / Server 2019+, 8 GB RAM, SQL Server / SQLite',
        sha256: '7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
        isPrimary: true
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        osTitle: 'macOS Manager & Auditor Suite',
        extension: '.dmg',
        fileName: 'ArgusERP-Manager-v2.4.3.dmg',
        fileSize: '98.4 MB',
        requirements: 'macOS 12.0 Monterey or later',
        sha256: 'cb8379ac2098aa165029e3938a51da0bcecfc008fd6795f401178647f96c5b34'
      },
      android: {
        id: 'android',
        name: 'Android',
        osTitle: 'Android Shop-Floor & Barcode Scanner App',
        extension: '.apk',
        fileName: 'ArgusERP-Scanner-v2.4.3.apk',
        fileSize: '26.7 MB',
        requirements: 'Android 9.0 or later with Camera/2D Scanner',
        sha256: '4e07408562bedb8b60ce05c1decfe3ad16b72230967de01f640b7e4729b49fce'
      },
      ios: {
        id: 'ios',
        name: 'iOS',
        osTitle: 'iOS Executive Dashboard',
        extension: '.ipa',
        fileName: 'ArgusERP-Executive-v2.4.3.ipa',
        fileSize: '31.0 MB',
        requirements: 'iOS 15.0 or later',
        sha256: '3a52ce780950d4d969792a2559cd519d7ee8c727bb30a519d2b21e6c530c0eee'
      }
    }
  }
};
