import React from 'react';

export default function StatsBanner() {
  return (
    <div className="max-w-[1320px] mx-auto px-5 sm:px-8 my-8">
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-primary via-vivid-violet to-electric-blue text-white shadow-[0_16px_40px_rgba(229,37,42,0.22)] flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shrink-0 shadow-inner">
            <span className="material-symbols-outlined text-[28px]">insights</span>
          </div>
          <div>
            <h3 className="font-headline text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
              Argus Industrial Benchmark
            </h3>
            <span className="block font-label text-xs text-white/80 uppercase tracking-widest mt-0.5">
              Engineered For High-Throughput Rigor
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-bold">100% In-House</span>
            <span className="font-label text-xs text-white/80">Architecture</span>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-bold">0ms Vision</span>
            <span className="font-label text-xs text-white/80">Edge Detection</span>
          </div>

          <div className="px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex flex-col">
            <span className="font-headline text-lg sm:text-xl font-bold">&lt;0.1s CAD</span>
            <span className="font-label text-xs text-white/80">Quote Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
