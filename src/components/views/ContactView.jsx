import React, { useState } from 'react';
import { Package, Headset, Download, Copy, Send, Check } from 'lucide-react';
import HeroSection from './HeroSection';

export default function ContactView({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    topic: 'MetalCalc',
    message: ''
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getFormattedEnquiry = () => {
    return `ARGUS Softwares - Enquiry\n----------------------------\nName: ${formData.name || 'Not provided'}\nCompany: ${formData.company || 'Not specified'}\nTopic: ${formData.topic}\nMessage:\n${formData.message || 'Interested in learning more about your solutions.'}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = getFormattedEnquiry();

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      setCopied(true);
      showToast('Enquiry formatted & copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      showToast('Enquiry text prepared. Copy from the box below.');
    }
  };

  const handleMailto = () => {
    const subject = encodeURIComponent(`ARGUS Softwares Enquiry: ${formData.topic}`);
    const body = encodeURIComponent(getFormattedEnquiry());
    window.location.href = `mailto:info@argussoftwares.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <HeroSection
        eyebrow="Business Enquiry"
        line1="Get In"
        line2="Touch"
        desc="Use this center window for product interest, support communication or customized software demo requests."
        mainIcon="Mail"
      />

      <div className="contact-layout">
        {/* Reach Out Info Box */}
        <div className="box">
          <h3>Reach the ARGUS team</h3>
          <p>
            Visitors can move to this contact window manually from the right rail or arrive here during the 5-second automatic rotation.
          </p>

          <div className="contact-item">
            <div className="ci">
              <Package />
            </div>
            <div>
              <b>Product enquiries</b>
              <small>Discuss MetalCalc, Attendance, ERP or tailor-made machine shop software requirements.</small>
            </div>
          </div>

          <div className="contact-item">
            <div className="ci">
              <Headset />
            </div>
            <div>
              <b>Support queries</b>
              <small>Ask about installation, workstation setup, backup scheduling, or database sync.</small>
            </div>
          </div>

          <div className="contact-item">
            <div className="ci">
              <Download />
            </div>
            <div>
              <b>Download assistance</b>
              <small>Get immediate assistance on installer delivery, licensing keys, and version releases.</small>
            </div>
          </div>

          <div className="footer-mini">
            <span>Powered by <strong>ARGUSCNC™</strong></span>
            <span>Single-screen contact concept</span>
          </div>
        </div>

        {/* Quick Enquiry Draft Form */}
        <div className="box">
          <h3>Quick enquiry draft</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name">Your name</label>
              <input
                className="field"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                required
              />
            </div>

            <div>
              <label htmlFor="contact-company">Company name</label>
              <input
                className="field"
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Precision CNC Works"
              />
            </div>

            <div>
              <label htmlFor="contact-topic">Topic of Interest</label>
              <select
                className="field"
                id="contact-topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
              >
                <option value="MetalCalc">MetalCalc (Weight & Costing)</option>
                <option value="ARGUS Attendance">ARGUS Attendance App</option>
                <option value="ARGUS ERP">ARGUS ERP Business Suite</option>
                <option value="Support">Product Support & Maintenance</option>
                <option value="Custom software">Custom Manufacturing Software</option>
                <option value="Other enquiry">General Commercial Enquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message">Message or Requirement</label>
              <textarea
                className="field"
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your machine shop, number of users, or specific feature requirements..."
                required
              />
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button className="btn" type="submit" style={{ flex: '1 1 140px' }}>
                {copied ? <Check /> : <Copy />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Enquiry Text'}</span>
              </button>

              <button
                className="btn secondary"
                type="button"
                onClick={handleMailto}
                style={{ flex: '1 1 140px' }}
                title="Send via default email client"
              >
                <Send style={{ width: '16px', height: '16px' }} />
                <span>Open Email</span>
              </button>
            </div>

            <div className="help">
              This is a working front-end UI preview. Clicking "Copy Enquiry Text" formats your inputs and copies them directly to your clipboard for WhatsApp, email, or chat sharing.
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
