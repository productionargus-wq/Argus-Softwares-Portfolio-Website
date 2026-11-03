import React from 'react';
import { Download, Calculator, Users, Database, Globe, Monitor, Apple, Smartphone, Terminal, ExternalLink, ArrowRight } from 'lucide-react';
import HeroSection from './HeroSection';
import { PRODUCTS_DOWNLOAD_DATA } from '../../data/productsDownloadData';

const platformIconMap = {
  windows: <Monitor style={{ width: '20px', height: '20px' }} />,
  macos: <Apple style={{ width: '20px', height: '20px' }} />,
  android: <Smartphone style={{ width: '20px', height: '20px' }} />,
  ios: <Smartphone style={{ width: '20px', height: '20px' }} />,
  linux: <Terminal style={{ width: '20px', height: '20px' }} />
};

const productMeta = {
  metalcalc: {
    color: 'var(--orange)',
    gradient: 'linear-gradient(135deg, var(--orange), #d94800)',
    icon: <Calculator style={{ width: '24px', height: '24px' }} />
  },
  attendance: {
    color: 'var(--green)',
    gradient: 'linear-gradient(135deg, var(--green), #00936b)',
    icon: <Users style={{ width: '24px', height: '24px' }} />
  },
  erp: {
    color: 'var(--purple)',
    gradient: 'linear-gradient(135deg, var(--purple), #5e1cb0)',
    icon: <Database style={{ width: '24px', height: '24px' }} />
  }
};

export default function DownloadsView({ onNavigate, showToast }) {
  const products = [
    PRODUCTS_DOWNLOAD_DATA.metalcalc,
    PRODUCTS_DOWNLOAD_DATA.attendance,
    PRODUCTS_DOWNLOAD_DATA.erp
  ].filter(Boolean);

  const handleDownloadFile = (fileName, downloadUrl) => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      if (downloadUrl.startsWith('http')) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast?.(`Starting direct download: ${fileName}`);
    } else {
      showToast?.(`Download package for ${fileName} will be available shortly.`);
    }
  };

  return (
    <>
      <HeroSection
        eyebrow="Software Center"
        line1="Product"
        line2="Downloads"
        desc="Official installation packages for Windows (.exe), macOS (.dmg), Android (.apk), and iOS (.ipa). Select your operating system below to start downloading immediately."
        mainIcon="Download"
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginTop: '16px' }}>
        {products.map((prod) => {
          const meta = productMeta[prod.id] || productMeta.metalcalc;

          return (
            <section
              key={prod.id}
              className="box"
              style={{
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid var(--line)',
                background: '#ffffff',
                boxShadow: '0 4px 20px rgba(15, 23, 42, 0.03)'
              }}
            >
              {/* Product Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '14px',
                  paddingBottom: '18px',
                  marginBottom: '18px',
                  borderBottom: '1px solid var(--line)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: meta.gradient,
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(15, 23, 42, 0.1)'
                    }}
                  >
                    {meta.icon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: 'var(--text)' }}>
                        {prod.title}
                      </h3>
                      <span className="ver" style={{ fontSize: '11px', padding: '2px 8px' }}>
                        {prod.id === 'attendance' ? 'v2.0.0' : prod.version}
                      </span>
                    </div>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
                      {prod.tagline}
                    </p>
                  </div>
                </div>

                {prod.webAppUrl && (
                  <a
                    href={prod.webAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary sm"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      textDecoration: 'none'
                    }}
                    title={`Open ${prod.title} in your browser`}
                  >
                    <Globe style={{ width: '15px', height: '15px', color: meta.color }} />
                    <span>Launch Live Web App</span>
                    <ExternalLink style={{ width: '13px', height: '13px', opacity: 0.7 }} />
                  </a>
                )}
              </div>

              {/* Direct Files List */}
              <div className="os-download-list">
                {Object.entries(prod.platforms || {}).map(([platformKey, pkg]) => (
                  <div key={platformKey} className="os-download-card">
                    <div className="os-card-left">
                      <div className="os-icon-badge" style={{ color: meta.color }}>
                        {platformIconMap[platformKey] || <Monitor style={{ width: '20px', height: '20px' }} />}
                      </div>
                      <div className="os-card-details">
                        <div className="os-title-row">
                          <span className="os-title">{pkg.osTitle || pkg.name}</span>
                          <span className="platform-ext">{pkg.extension}</span>
                          {pkg.fileSize && (
                            <span className="os-size-badge">{pkg.fileSize}</span>
                          )}
                        </div>
                        <div className="os-filename" title={pkg.fileName}>
                          {pkg.fileName}
                        </div>
                        {pkg.requirements && (
                          <div className="pkg-requirements" style={{ fontSize: '12px', color: '#64748b' }}>
                            {pkg.requirements}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="os-card-actions">
                      <button
                        className="btn"
                        style={{
                          background: meta.gradient,
                          minWidth: '130px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                        onClick={() => handleDownloadFile(pkg.fileName, pkg.downloadUrl)}
                        title={`Download ${pkg.fileName}`}
                      >
                        <Download style={{ width: '15px', height: '15px' }} />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="footer-mini" style={{ marginTop: '24px' }}>
        <span>Need installation assistance or custom enterprise deployment?</span>
        <button
          onClick={() => onNavigate('contact')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--orange)',
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <span>Contact Technical Support</span>
          <ArrowRight style={{ width: '13px', height: '13px' }} />
        </button>
      </div>
    </>
  );
}
