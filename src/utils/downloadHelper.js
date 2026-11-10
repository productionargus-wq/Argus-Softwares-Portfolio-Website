/**
 * Triggers a direct same-origin download for a locally hosted installer package
 * inside `public/`. Verifies first that the binary exists and is not an SPA
 * HTML fallback page before initiating the download.
 *
 * @param {string} fileName - Suggested download filename.
 * @param {string | undefined} downloadUrl - Same-origin path to the package.
 * @param {(message: string) => void} [showToast] - Optional feedback callback.
 */
export async function triggerLocalDownload(fileName, downloadUrl, showToast) {
  if (!downloadUrl) {
    showToast?.(`Download package for ${fileName} will be available shortly.`);
    return;
  }

  try {
    const response = await fetch(downloadUrl, { method: 'HEAD', cache: 'no-store' });
    const contentType = (response.headers.get('content-type') || '').toLowerCase();

    // Prevent downloading an HTML SPA fallback or 404 page as an installer binary.
    if (!response.ok || contentType.includes('text/html')) {
      showToast?.(`Download package for ${fileName} will be available shortly.`);
      return;
    }
  } catch {
    showToast?.(`Download package for ${fileName} will be available shortly.`);
    return;
  }

  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast?.(`Starting direct download: ${fileName}`);
}
