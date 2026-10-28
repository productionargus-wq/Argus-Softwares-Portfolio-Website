import React, { useState, useEffect, useRef, useCallback } from 'react';
import NavigationRail from './components/NavigationRail';
import Topbar from './components/Topbar';
import MotionLayer from './components/MotionLayer';
import Toast from './components/Toast';
import ProductsView from './components/views/ProductsView';
import MetalCalcView from './components/views/MetalCalcView';
import ErpView from './components/views/ErpView';
import SolutionsView from './components/views/SolutionsView';
import AttendanceView from './components/views/AttendanceView';
import DownloadsView from './components/views/DownloadsView';
import SupportView from './components/views/SupportView';
import ContactView from './components/views/ContactView';
import TestimonialsView from './components/views/TestimonialsView';
import { SECTION_KEYS } from './data/sectionsData';

const DEFAULT_INTERVAL = 5000; // 5 seconds default auto-rotation

export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return SECTION_KEYS.includes(hash) ? hash : 'products';
  });

  const [triggerCounter, setTriggerCounter] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [toast, setToast] = useState({ message: '', visible: false });
  const [uploads, setUploads] = useState({});

  const stageRef = useRef(null);
  const isAutoRotationActiveRef = useRef(true);
  const progressStartRef = useRef(0);
  const rotationTimerRef = useRef(null);
  const progressTimerRef = useRef(null);
  const toastTimeoutRef = useRef(null);

  // Show Toast helper
  const showToast = useCallback((message) => {
    clearTimeout(toastTimeoutRef.current);
    setToast({ message, visible: true });
    toastTimeoutRef.current = setTimeout(() => {
      setToast({ message: '', visible: false });
    }, 3200);
  }, []);

  // Stop auto-rotation and progress permanently
  const stopAutoRotation = useCallback(() => {
    if (!isAutoRotationActiveRef.current) return;
    isAutoRotationActiveRef.current = false;
    setIsAutoRotating(false);
    if (rotationTimerRef.current) {
      clearTimeout(rotationTimerRef.current);
      rotationTimerRef.current = null;
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    setProgressPercent(0);
  }, []);

  // Schedule the next automatic rotation (5s interval during initial auto-cycle)
  const scheduleRotation = useCallback(function schedule() {
    clearTimeout(rotationTimerRef.current);
    if (!isAutoRotationActiveRef.current) return;

    rotationTimerRef.current = setTimeout(() => {
      if (!isAutoRotationActiveRef.current) return;

      // Don't auto-switch if modal is open
      const isModalOpen = Boolean(document.querySelector('.modal-backdrop'));
      if (isModalOpen) {
        progressStartRef.current = Date.now();
        schedule();
        return;
      }

      // Check again before updating state
      if (!isAutoRotationActiveRef.current) return;

      // Automatically transition to the next section
      setActiveSection((curr) => {
        if (!isAutoRotationActiveRef.current) return curr;
        const currIndex = SECTION_KEYS.indexOf(curr);
        const nextIndex = (currIndex + 1) % SECTION_KEYS.length;
        const nextSection = SECTION_KEYS[nextIndex];
        setTriggerCounter((c) => c + 1);
        try {
          window.history.replaceState(null, '', `#${nextSection}`);
        } catch {
          // ignore
        }
        return nextSection;
      });

      progressStartRef.current = Date.now();
      setProgressPercent(0);

      if (stageRef.current) {
        stageRef.current.scrollTop = 0;
      }

      schedule();
    }, DEFAULT_INTERVAL);
  }, []);

  // Handle section navigation
  // - isExplicitClick: Permanently locks to that section and stops auto-rotation
  // - hover preview (!isExplicitClick): Only changes view if still in initial auto-rotation phase
  const navigateTo = useCallback((sectionId, isExplicitClick = true) => {
    if (!SECTION_KEYS.includes(sectionId)) return;

    if (isExplicitClick) {
      // Explicit click permanently stops auto-rotation and locks the tab
      stopAutoRotation();

      setActiveSection((current) => {
        if (current !== sectionId) {
          setTriggerCounter((c) => c + 1);
          try {
            window.history.replaceState(null, '', `#${sectionId}`);
          } catch {
            // Ignore state change errors in iframe
          }
          return sectionId;
        }
        return current;
      });

      if (stageRef.current) {
        stageRef.current.scrollTop = 0;
      }
    } else {
      // Hover preview is only allowed initially when auto-rotation has not been stopped
      if (!isAutoRotationActiveRef.current) return;

      setActiveSection((current) => {
        if (current !== sectionId) {
          setTriggerCounter((c) => c + 1);
          try {
            window.history.replaceState(null, '', `#${sectionId}`);
          } catch {
            // Ignore state change errors in iframe
          }
          return sectionId;
        }
        return current;
      });

      // Reset progress & schedule next rotation from now for the hovered tab
      progressStartRef.current = Date.now();
      setProgressPercent(0);

      if (stageRef.current) {
        stageRef.current.scrollTop = 0;
      }

      scheduleRotation();
    }
  }, [scheduleRotation, stopAutoRotation]);

  // Upload file handling
  const handleUpload = (productKey, file) => {
    setUploads((prev) => {
      if (prev[productKey]?.url) {
        URL.revokeObjectURL(prev[productKey].url);
      }
      return {
        ...prev,
        [productKey]: {
          name: file.name,
          size: file.size,
          url: URL.createObjectURL(file)
        }
      };
    });
  };

  // Download file handling
  const handleDownload = (productKey) => {
    const data = uploads[productKey];
    if (!data) {
      showToast('No installer file loaded for this software.');
      return;
    }
    const a = document.createElement('a');
    a.href = data.url;
    a.download = data.name;
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast(`Downloading file: ${data.name}`);
  };

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      Object.values(uploads).forEach((item) => {
        if (item?.url) URL.revokeObjectURL(item.url);
      });
    };
  }, [uploads]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (SECTION_KEYS.includes(hash)) {
        navigateTo(hash, true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [navigateTo]);

  // Start rotation & progress tick on mount
  useEffect(() => {
    progressStartRef.current = Date.now();
    scheduleRotation();

    // Progress bar tick (40ms) runs during initial auto-rotation
    progressTimerRef.current = setInterval(() => {
      if (!isAutoRotationActiveRef.current) {
        setProgressPercent(0);
        return;
      }
      if (document.querySelector('.modal-backdrop')) {
        progressStartRef.current = Date.now();
        return;
      }
      const elapsed = Date.now() - progressStartRef.current;
      const pct = Math.min((elapsed / DEFAULT_INTERVAL) * 100, 100);
      setProgressPercent(pct);
    }, 40);

    return () => {
      clearTimeout(rotationTimerRef.current);
      clearInterval(progressTimerRef.current);
    };
  }, [scheduleRotation]);

  return (
    <>
      <div className="bg-lines" aria-hidden="true"></div>

      <div className="shell">
        {/* Left Navigation Rail */}
        <NavigationRail
          side="left"
          activeSection={activeSection}
          onSelectSection={(id, isClick) => navigateTo(id, isClick)}
        />

        {/* Center Main Stage Window */}
        <main className="center">
          <Topbar />

          <div
            className="stage-wrap"
            onMouseEnter={stopAutoRotation}
            onMouseMove={() => {
              if (isAutoRotationActiveRef.current) stopAutoRotation();
            }}
          >
            <div
              className="progress"
              style={{
                opacity: isAutoRotating ? 1 : 0,
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease'
              }}
              aria-hidden="true"
            >
              <i style={{ width: `${progressPercent}%` }}></i>
            </div>

            <div
              className="stage"
              ref={stageRef}
              tabIndex={0}
              aria-label="Active Section Workspace"
              onMouseEnter={stopAutoRotation}
              onMouseMove={() => {
                if (isAutoRotationActiveRef.current) stopAutoRotation();
              }}
            >
              {activeSection === 'products' && <ProductsView onNavigate={(id) => navigateTo(id, true)} showToast={showToast} />}
              {activeSection === 'metalcalc' && <MetalCalcView onNavigate={(id) => navigateTo(id, true)} />}
              {activeSection === 'erp' && <ErpView onNavigate={(id) => navigateTo(id, true)} />}
              {activeSection === 'solutions' && <SolutionsView onNavigate={(id) => navigateTo(id, true)} />}
              {activeSection === 'attendance' && <AttendanceView onNavigate={(id) => navigateTo(id, true)} showToast={showToast} />}
              {activeSection === 'downloads' && (
                <DownloadsView
                  onNavigate={(id) => navigateTo(id, true)}
                  uploads={uploads}
                  onUpload={handleUpload}
                  onDownload={handleDownload}
                  showToast={showToast}
                />
              )}
              {activeSection === 'testimonials' && <TestimonialsView onNavigate={(id) => navigateTo(id, true)} />}
              {activeSection === 'support' && <SupportView onNavigate={(id) => navigateTo(id, true)} />}
              {activeSection === 'contact' && <ContactView showToast={showToast} />}
            </div>
          </div>
        </main>

        {/* Right Navigation Rail */}
        <NavigationRail
          side="right"
          activeSection={activeSection}
          onSelectSection={(id, isClick) => navigateTo(id, isClick)}
        />
      </div>

      {/* Flight trajectory animation layer */}
      <MotionLayer
        activeSection={activeSection}
        triggerCounter={triggerCounter}
        stageRef={stageRef}
      />

      {/* Global feedback toast */}
      <Toast message={toast.message} visible={toast.visible} />
    </>
  );
}
