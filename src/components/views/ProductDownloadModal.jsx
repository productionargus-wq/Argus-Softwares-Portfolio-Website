import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Monitor, Smartphone, Apple, Terminal, X, ArrowLeft, ExternalLink, Globe } from 'lucide-react';
import { PRODUCTS_DOWNLOAD_DATA } from '../../data/productsDownloadData';
import { triggerLocalDownload } from '../../utils/downloadHelper';

const platformIconMap = {
  windows: <Monitor style={{ width: '20px', height: '20px' }} />,
  macos: <Apple style={{ width: '20px', height: '20px' }} />,
  android: <Smartphone style={{ width: '20px', height: '20px' }} />,
  ios: <Smartphone style={{ width: '20px', height: '20px' }} />,
  linux: <Terminal style={{ width: '20px', height: '20px' }} />
};

export default function ProductDownloadModal({ productKey, onClose, showToast }) {
  const productData = PRODUCTS_DOWNLOAD_DATA[productKey] || PRODUCTS_DOWNLOAD_DATA.metalcalc;

  // Close on Escape key & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const handleTriggerDownload = (pkg) => {
    triggerLocalDownload(pkg.fileName, pkg.downloadUrl, showToast);
  };

  return createPortal(
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button className="modal-back-btn" onClick={onClose} title="Back to products list">
              <ArrowLeft style={{ width: '18px', height: '18px' }} />
              <span>Back</span>
            </button>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <h3 className="modal-title">{productData.title}</h3>
                <span className="ver">
                  {productKey === 'attendance' ? 'v2.0.0' : productData.version}
                </span>
              </div>
              <p className="modal-subtitle">{productData.tagline}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {productData.webAppUrl && (
              <a
                href={productData.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, var(--orange), #d94800)',
                  color: '#ffffff',
                  fontSize: '12px',
                  padding: '6px 12px',
                  height: '32px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  boxShadow: '0 2px 6px rgba(234, 88, 12, 0.25)'
                }}
                title={`Launch ${productData.title} Live Web Application in a new tab`}
              >
                <Globe style={{ width: '14px', height: '14px' }} />
                <span>Launch Web App</span>
                <ExternalLink style={{ width: '12px', height: '12px', opacity: 0.85 }} />
              </a>
            )}
            <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Cloud Web App Banner (Zero-Install Option) */}
          {productData.webAppUrl && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(37, 99, 235, 0.08))',
                border: '1px solid rgba(255, 107, 53, 0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '14px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, var(--orange), #ea580c)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Globe style={{ width: '20px', height: '20px' }} />
                </div>
                <div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#0f172a' }}>
                    Prefer using online in your browser?
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    No setup or downloads required. Launch the live cloud edition of {productData.title} instantly.
                  </div>
                </div>
              </div>

              <a
                href={productData.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, #0f172a, #1e293b)',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  padding: '8px 14px',
                  borderRadius: '7px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none'
                }}
              >
                <span>Launch Cloud Web App</span>
                <ExternalLink style={{ width: '13px', height: '13px' }} />
              </a>
            </div>
          )}

          {/* OS Download List - Stacked vertically line-by-line */}
          <div className="os-download-list">
            {Object.entries(productData.platforms).map(([platformKey, pkg]) => (
              <div key={platformKey} className="os-download-card">
                <div className="os-card-left">
                  <div className="os-icon-badge">
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
                      <div className="pkg-requirements">
                        {pkg.requirements}
                      </div>
                    )}
                  </div>
                </div>

                <div className="os-card-actions">
                  <button
                    className="btn download-action-btn"
                    onClick={() => handleTriggerDownload(pkg)}
                    title={`Download for ${pkg.name}`}
                  >
                    <Download style={{ width: '16px', height: '16px' }} />
                    <span>Download for {pkg.name}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
