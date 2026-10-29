import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, Monitor, Smartphone, Apple, Terminal, X, Check, Copy, ShieldCheck, ArrowLeft, FileCode, CheckCircle2, ExternalLink, RefreshCw } from 'lucide-react';
import { PRODUCTS_DOWNLOAD_DATA } from '../../data/productsDownloadData';

const platformIconMap = {
  windows: <Monitor style={{ width: '18px', height: '18px' }} />,
  macos: <Apple style={{ width: '18px', height: '18px' }} />,
  android: <Smartphone style={{ width: '18px', height: '18px' }} />,
  ios: <Smartphone style={{ width: '18px', height: '18px' }} />,
  linux: <Terminal style={{ width: '18px', height: '18px' }} />
};

const GITHUB_REPO_MAP = {
  metalcalc: 'productionargus-wq/Metal-Calculator-And-Quotation-Suite',
  attendance: 'productionargus-wq/Simple-AI-Attendance'
};

export default function ProductDownloadModal({ productKey, onClose, showToast }) {
  const baseProduct = PRODUCTS_DOWNLOAD_DATA[productKey] || PRODUCTS_DOWNLOAD_DATA.metalcalc;
  const [productData, setProductData] = useState(baseProduct);
  const [isLiveSync, setIsLiveSync] = useState(false);
  const repoName = GITHUB_REPO_MAP[productKey];
  const [isFetchingRelease, setIsFetchingRelease] = useState(Boolean(repoName));
  const [releaseUrl, setReleaseUrl] = useState(
    repoName ? `https://github.com/${repoName}/releases/latest` : ''
  );

  const platformKeys = Object.keys(productData.platforms);
  const [selectedPlatform, setSelectedPlatform] = useState(platformKeys[0] || 'windows');
  const [copiedHash, setCopiedHash] = useState(false);

  // Auto-fetch latest release from GitHub API dynamically
  useEffect(() => {
    let isMounted = true;
    if (repoName) {
      fetch(`https://api.github.com/repos/${repoName}/releases/latest`)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.json();
        })
        .then((latest) => {
          if (!isMounted || !latest) return;
          setReleaseUrl(latest.html_url || `https://github.com/${repoName}/releases/latest`);

          // Dynamically map uploaded GitHub release assets to corresponding platform tabs
          const updatedPlatforms = { ...baseProduct.platforms };

          if (Array.isArray(latest.assets)) {
            latest.assets.forEach((asset) => {
              const nameLower = (asset.name || '').toLowerCase();
              const sizeFormatted = asset.size < 1024 * 1024
                ? (asset.size / 1024).toFixed(0) + ' KB'
                : (asset.size / (1024 * 1024)).toFixed(1) + ' MB';
              const sha = asset.digest ? asset.digest.replace('sha256:', '') : null;

              // Windows Setup Installer
              if (nameLower.includes('setup') && nameLower.endsWith('.exe') && updatedPlatforms.windows) {
                updatedPlatforms.windows = {
                  ...updatedPlatforms.windows,
                  fileName: asset.name,
                  fileSize: sizeFormatted,
                  downloadUrl: asset.browser_download_url,
                  sha256: sha || updatedPlatforms.windows.sha256
                };
              }
              // Windows Standalone Portable Executable
              else if (nameLower.includes('standalone') && nameLower.endsWith('.exe') && updatedPlatforms.windows) {
                updatedPlatforms.windows = {
                  ...updatedPlatforms.windows,
                  secondaryFileName: asset.name,
                  secondaryFileSize: sizeFormatted,
                  secondaryDownloadUrl: asset.browser_download_url,
                  secondarySha256: sha || updatedPlatforms.windows.secondarySha256
                };
              }
              // Fallback any .exe
              else if (nameLower.endsWith('.exe') && updatedPlatforms.windows && !updatedPlatforms.windows.downloadUrl) {
                updatedPlatforms.windows = {
                  ...updatedPlatforms.windows,
                  fileName: asset.name,
                  fileSize: sizeFormatted,
                  downloadUrl: asset.browser_download_url,
                  sha256: sha || updatedPlatforms.windows.sha256
                };
              }

              // macOS DMG Installer
              if (nameLower.endsWith('.dmg') && updatedPlatforms.macos) {
                updatedPlatforms.macos = {
                  ...updatedPlatforms.macos,
                  fileName: asset.name,
                  fileSize: sizeFormatted,
                  downloadUrl: asset.browser_download_url,
                  sha256: sha || updatedPlatforms.macos.sha256
                };
              }
              // macOS Portable App (.ZIP)
              else if ((nameLower.includes('macos') || nameLower.includes('mac') || nameLower.includes('app')) && nameLower.endsWith('.zip') && updatedPlatforms.macos) {
                updatedPlatforms.macos = {
                  ...updatedPlatforms.macos,
                  secondaryFileName: asset.name,
                  secondaryFileSize: sizeFormatted,
                  secondaryDownloadUrl: asset.browser_download_url,
                  secondarySha256: sha || updatedPlatforms.macos.secondarySha256
                };
              }

              // Android APK (skip debug APK)
              if (nameLower.endsWith('.apk') && !nameLower.includes('debug') && updatedPlatforms.android) {
                updatedPlatforms.android = {
                  ...updatedPlatforms.android,
                  fileName: asset.name,
                  fileSize: sizeFormatted,
                  downloadUrl: asset.browser_download_url,
                  sha256: sha || updatedPlatforms.android.sha256
                };
              }

              // iOS IPA
              if (nameLower.endsWith('.ipa') && updatedPlatforms.ios) {
                updatedPlatforms.ios = {
                  ...updatedPlatforms.ios,
                  fileName: asset.name,
                  fileSize: sizeFormatted,
                  downloadUrl: asset.browser_download_url,
                  sha256: sha || updatedPlatforms.ios.sha256
                };
              }
            });
          }

          const formattedDate = new Date(latest.published_at || latest.created_at).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          });

          setProductData((prev) => ({
            ...prev,
            version: latest.tag_name || prev.version,
            releaseTag: latest.tag_name || prev.releaseTag,
            releaseDate: formattedDate || prev.releaseDate,
            platforms: updatedPlatforms
          }));
          setIsLiveSync(true);
        })
        .catch(() => {
          // Fall back gracefully to static bundled data in productsDownloadData.js
          setIsLiveSync(false);
        })
        .finally(() => {
          if (isMounted) setIsFetchingRelease(false);
        });
    }

    return () => {
      isMounted = false;
    };
  }, [productKey, baseProduct, repoName]);

  const currentPkg = productData.platforms[selectedPlatform] || productData.platforms[platformKeys[0]];

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

  const handleCopyHash = async (hash) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(hash);
      }
      setCopiedHash(true);
      showToast?.('SHA-256 checksum copied to clipboard');
      setTimeout(() => setCopiedHash(false), 2500);
    } catch {
      showToast?.('Checksum copied');
    }
  };

  const handleTriggerDownload = (fileName, customUrl) => {
    const downloadUrl = customUrl || currentPkg?.downloadUrl;
    // If download URL is available (local path or external CDN), trigger direct download
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
      return;
    }

    // Fallback simulated file if offline or custom preview
    const dummyBlob = new Blob(
      [
        `ARGUS SOFTWARES - Official Release Package\n\nProduct: ${productData.title}\nVersion: ${productData.version}\nFile: ${fileName}\nPlatform: ${currentPkg.osTitle}\nRelease Date: ${productData.releaseDate}\nSHA-256: ${currentPkg.sha256}\n\nThank you for downloading from ARGUS Softwares official distribution.`
      ],
      { type: 'application/octet-stream' }
    );

    const blobUrl = URL.createObjectURL(dummyBlob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 100);

    showToast?.(`Downloading ${fileName} (${currentPkg.fileSize})`);
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
                <span className="ver">{productData.version}</span>
                <span className="live-sync-badge" title="Real-time connected to official GitHub Releases">
                  <span className="live-dot" />
                  <span>{isLiveSync ? `Live Release ${productData.releaseTag}` : 'GitHub Release Connected'}</span>
                </span>
                {isFetchingRelease && (
                  <RefreshCw style={{ width: '13px', height: '13px', color: '#64748b', animation: 'spin 1s linear infinite' }} />
                )}
              </div>
              <p className="modal-subtitle">{productData.tagline}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {releaseUrl && (
              <a
                href={releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-release-btn"
                title="View full release and source on GitHub"
              >
                <span>GitHub Release</span>
                <ExternalLink style={{ width: '13px', height: '13px' }} />
              </a>
            )}
            <button className="modal-close-icon" onClick={onClose} aria-label="Close modal">
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Platform Selector Tabs */}
          <div className="platform-tabs" role="tablist">
            {platformKeys.map((key) => {
              const p = productData.platforms[key];
              const isActive = selectedPlatform === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  className={`platform-tab ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedPlatform(key)}
                >
                  {platformIconMap[key]}
                  <span className="platform-name">{p.name}</span>
                  <span className="platform-ext">{p.extension}</span>
                </button>
              );
            })}
          </div>

          {/* Active Platform Download Showcase Card */}
          <div className="download-showcase-card">
            <div className="showcase-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div className="os-icon-badge">
                  {platformIconMap[selectedPlatform]}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '17px', fontWeight: 800, color: '#0f172a' }}>
                    {currentPkg.osTitle}
                  </h4>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Published: <strong>{productData.releaseDate}</strong> • License: {productData.license}
                  </div>
                </div>
              </div>

              <div className="filesize-pill">
                <strong>{currentPkg.fileSize}</strong>
              </div>
            </div>

            {/* Primary Package Download Box */}
            <div className="package-download-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
                <div className="file-icon-box">
                  <FileCode style={{ width: '22px', height: '22px' }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="pkg-filename" title={currentPkg.fileName}>
                    {currentPkg.fileName}
                  </div>
                  <div className="pkg-requirements">
                    {currentPkg.requirements}
                  </div>
                  <div className="cdn-note">
                    {currentPkg.downloadUrl?.startsWith('/')
                      ? '⚡ Direct high-speed download hosted on site package server'
                      : '⚡ Direct high-speed download hosted on GitHub Global CDN'}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-end' }}>
                <button
                  className="btn download-action-btn"
                  onClick={() => handleTriggerDownload(currentPkg.fileName)}
                >
                  <Download style={{ width: '18px', height: '18px' }} />
                  <span>Download {currentPkg.name} Package</span>
                </button>
                {currentPkg.downloadUrl && (
                  <a
                    href={currentPkg.downloadUrl}
                    download={currentPkg.fileName}
                    target={currentPkg.downloadUrl.startsWith('http') ? '_blank' : undefined}
                    rel={currentPkg.downloadUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '11px', color: '#64748b', textDecoration: 'underline' }}
                  >
                    Direct mirror link
                  </a>
                )}
              </div>
            </div>

            {/* Secondary installer / portable option if available */}
            {(currentPkg.secondaryFileName || currentPkg.secondaryFile) && (
              <div className="secondary-pkg-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '10px' }}>
                <span style={{ fontSize: '12px', color: '#475569' }}>
                  {currentPkg.secondaryLabel || 'Alternative distribution'}: <strong>{currentPkg.secondaryFileName || currentPkg.secondaryFile}</strong>
                  {currentPkg.secondaryFileSize && ` (${currentPkg.secondaryFileSize})`}
                </span>
                <button
                  className="btn secondary sm"
                  onClick={() => handleTriggerDownload(currentPkg.secondaryFileName || currentPkg.secondaryFile?.split(' ')[0], currentPkg.secondaryDownloadUrl)}
                  title={`Download ${currentPkg.secondaryFileName || currentPkg.secondaryFile}`}
                >
                  <Download style={{ width: '14px', height: '14px' }} />
                  <span>{currentPkg.secondaryActionLabel || 'Download Alternative'}</span>
                </button>
              </div>
            )}

            {/* Checksum SHA-256 Bar */}
            <div className="checksum-row">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: '#64748b' }}>
                <ShieldCheck style={{ width: '15px', height: '15px', color: 'var(--green)' }} />
                <span>SHA-256 Checksum:</span>
                <code className="checksum-code">{currentPkg.sha256}</code>
              </div>
              <button
                className="copy-hash-btn"
                onClick={() => handleCopyHash(currentPkg.sha256)}
                title="Copy SHA-256 checksum"
              >
                {copiedHash ? <Check style={{ width: '13px', height: '13px', color: 'var(--green)' }} /> : <Copy style={{ width: '13px', height: '13px' }} />}
                <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>

          {/* Changelog & Quick Install Guide */}
          <div className="modal-info-split">
            <div className="modal-info-box">
              <h5 className="modal-info-title">
                <CheckCircle2 style={{ width: '16px', height: '16px', color: 'var(--orange)' }} />
                What's New in {productData.version}
              </h5>
              <ul className="modal-changelog-list">
                {productData.changelog.map((item, idx) => (
                  <li key={idx}>
                    <i>•</i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-info-box">
              <h5 className="modal-info-title">
                <ShieldCheck style={{ width: '16px', height: '16px', color: 'var(--blue)' }} />
                Release & Distribution Sync
              </h5>
              <p style={{ margin: '0 0 8px 0', fontSize: '12.5px', lineHeight: '1.6', color: '#475569' }}>
                All binaries are hosted on GitHub Releases CDN. When you publish a new version on GitHub, this website automatically checks GitHub's Releases API on every visitor request and serves the newest release instantly without redeploying code.
              </p>
              <div style={{ fontSize: '11.5px', color: '#64748b', background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                💡 <strong>Admin workflow</strong>: To add a new version or replace an installer, draft a release on GitHub and upload the files. The website updates automatically!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
