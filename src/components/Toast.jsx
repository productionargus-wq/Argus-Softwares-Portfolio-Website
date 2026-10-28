import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message, visible }) {
  return (
    <div className={`toast ${visible ? 'show' : ''}`} role="status" aria-live="polite">
      <CheckCircle2 style={{ width: '18px', height: '18px', color: 'var(--orange)' }} />
      <span>{message}</span>
    </div>
  );
}
