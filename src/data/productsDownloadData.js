export const PRODUCTS_DOWNLOAD_DATA = {
  metalcalc: {
    id: 'metalcalc',
    title: 'MetalCalc',
    tagline: 'Engineering & Machine Shop Weight Calculator',
    version: 'v1.0.0',
    releaseTag: 'v1.0.0',
    releaseDate: 'October 28, 2026',
    license: 'Commercial / Offline Standalone',
    changelog: [
      'Official Windows Setup installer (MetalCalculator-Setup-Windows.exe)',
      'Windows Portable standalone executable (MetalCalculator-Standalone-Windows.exe)',
      'Universal macOS DMG installer (MetalCalculator-macOS.dmg)',
      'macOS Portable app bundle (MetalCalculator-macOS.app.zip)',
      'Android APK mobile package for shop-floor reference (MetalCalculator-Android-Release.apk)',
      'iOS IPA distribution build (MetalCalculator-iOS.ipa)'
    ],
    platforms: {
      windows: {
        id: 'windows',
        name: 'Windows',
        osTitle: 'Windows Desktop (64-bit)',
        extension: '.exe',
        fileName: 'MetalCalculator.exe',
        fileSize: '53.5 MB',
        downloadUrl: '/MetalCalculator.exe',
        secondaryFileName: 'MetalCalculator-Standalone-Windows.exe',
        secondaryFileSize: '30.8 MB',
        secondaryLabel: 'GitHub Release Mirror',
        secondaryActionLabel: 'Download GitHub Mirror',
        secondaryDownloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-Standalone-Windows.exe',
        secondarySha256: 'd244960211e038b743febff1aa9164e3269384b7ad28c2fda84560bfd1e7dad0',
        requirements: 'Windows 11 / 10 (64-bit), 4 GB RAM, 100 MB disk space',
        sha256: '6ef2f8a1183d8f6705621126c3f1b22f71e730e3750b59420294bb2a2bce8dd3',
        isPrimary: true
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        osTitle: 'macOS Universal (Apple Silicon & Intel)',
        extension: '.dmg',
        fileName: 'MetalCalculator-macOS.dmg',
        fileSize: '44.3 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-macOS.dmg',
        secondaryFileName: 'MetalCalculator-macOS.app.zip',
        secondaryFileSize: '43.9 MB',
        secondaryLabel: 'macOS Portable Application Bundle',
        secondaryActionLabel: 'Download App .ZIP',
        secondaryDownloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-macOS.app.zip',
        secondarySha256: '257c823d31d9923aaff23fbba6a96bf8ae42887e7b902ce16b8165ff9474010e',
        requirements: 'macOS 12.0 Monterey or later (Universal binary)',
        sha256: '630101cda63345e14ccaecc24baad70a529b0688cd3d1ee881ace5f29268fd99'
      },
      android: {
        id: 'android',
        name: 'Android',
        osTitle: 'Android Mobile & Tablet',
        extension: '.apk',
        fileName: 'MetalCalculator-Android-Release.apk',
        fileSize: '6.05 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-Android-Release.apk',
        requirements: 'Android 8.0 (Oreo) or later',
        sha256: '9df1bea986baf6296948ec8709ddd8967fdd57e90684e39383d71d93a91e451e'
      },
      ios: {
        id: 'ios',
        name: 'iOS / iPadOS',
        osTitle: 'iPhone & iPad',
        extension: '.ipa',
        fileName: 'MetalCalculator-iOS.ipa',
        fileSize: '3.87 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-iOS.ipa',
        requirements: 'iOS 15.0 or later (Direct Enterprise / TestFlight build)',
        sha256: 'ef2d127de37b942baad06145e54b0c619a1f22327b2ebbcfbec78f5564afe39d'
      },
      linux: {
        id: 'linux',
        name: 'Linux',
        osTitle: 'Linux (x86_64)',
        extension: '.deb / .AppImage',
        fileName: 'MetalCalc-v1.0.0-amd64.deb',
        fileSize: '43.8 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Metal-Calculator-And-Quotation-Suite/releases/latest/download/MetalCalculator-Standalone-Windows.exe',
        requirements: 'Ubuntu 20.04+, Debian 11+, Fedora 36+, or Arch Linux',
        sha256: '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'
      }
    }
  },

  attendance: {
    id: 'attendance',
    title: 'ARGUS AI Attendance App',
    tagline: 'Workforce Shift Tracking, Geofencing & Biometric Sync',
    version: 'v2.0.0',
    releaseTag: 'v2.0.0',
    releaseDate: 'October 28, 2026',
    license: 'Subscription / Enterprise Biometric',
    changelog: [
      'Official Windows Setup installer (ArgusAttendance-Setup-Windows.exe)',
      'Windows Portable standalone executable (ArgusAttendance-Standalone-Windows.exe)',
      'Universal macOS DMG installer (ArgusAttendance-macOS.dmg)',
      'macOS Portable app bundle (ArgusAttendance-macOS.app.zip)',
      'Android APK mobile punch package (ArgusAttendance-Android.apk)',
      'iOS IPA distribution build (ArgusAttendance-iOS.ipa)'
    ],
    platforms: {
      windows: {
        id: 'windows',
        name: 'Windows',
        osTitle: 'Windows Desktop Admin Console (64-bit)',
        extension: '.exe',
        fileName: 'ArgusAttendance-Setup-Windows.exe',
        fileSize: '152.1 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-Setup-Windows.exe',
        secondaryFileName: 'ArgusAttendance-Standalone-Windows.exe',
        secondaryFileSize: '151.4 MB',
        secondaryLabel: 'Portable Standalone (No Install Required)',
        secondaryActionLabel: 'Download Portable .EXE',
        secondaryDownloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-Standalone-Windows.exe',
        secondarySha256: '3f1d70210f558d1c6deb69ba132ed73de22ade68bb05c10d8757002180fe2971',
        requirements: 'Windows 10 / 11 (64-bit), LAN connection to biometric hardware',
        sha256: 'c14b7d92ab73f55032a7749f01b014fefb5fb6dee9b7583bbfbf5dec01170940',
        isPrimary: true
      },
      macos: {
        id: 'macos',
        name: 'macOS',
        osTitle: 'macOS Admin Dashboard (Apple Silicon & Intel)',
        extension: '.dmg',
        fileName: 'ArgusAttendance-macOS.dmg',
        fileSize: '145.6 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-macOS.dmg',
        secondaryFileName: 'ArgusAttendance-macOS.app.zip',
        secondaryFileSize: '143.2 MB',
        secondaryLabel: 'macOS Portable Application Bundle',
        secondaryActionLabel: 'Download App .ZIP',
        secondaryDownloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-macOS.app.zip',
        secondarySha256: '92e76ae2dfdb84797ea808c8858bbdceebb1fcb5d416114291da400e8f399f92',
        requirements: 'macOS 12.0 Monterey or later (Universal binary)',
        sha256: 'b82888087b2097217f285b675853319aea97c598d8f15dd6689eaf0a5327ea6e'
      },
      android: {
        id: 'android',
        name: 'Android',
        osTitle: 'Android Employee & Guard Punch App',
        extension: '.apk',
        fileName: 'ArgusAttendance-Android.apk',
        fileSize: '3.75 MB',
        downloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-Android.apk',
        requirements: 'Android 8.0 or later with GPS & Camera support',
        sha256: '07a19d6c3a203fbd698e8918167c457cab6c56f06a89a99643541e28d35d97d0'
      },
      ios: {
        id: 'ios',
        name: 'iOS',
        osTitle: 'iOS Employee App',
        extension: '.ipa',
        fileName: 'ArgusAttendance-iOS.ipa',
        fileSize: '895 KB',
        downloadUrl: 'https://github.com/productionargus-wq/Simple-AI-Attendance/releases/latest/download/ArgusAttendance-iOS.ipa',
        requirements: 'iOS 15.0 or later (Direct Enterprise / TestFlight build)',
        sha256: 'dda92a4586d1665fd3c62f8099c4d5fa46e8b8fdff46fd5824e70eeaac1a7746'
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
