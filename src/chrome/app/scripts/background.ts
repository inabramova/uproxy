/*
 * background.ts is evaluated when the chrome app is loaded.
 */
/// <reference path='../../../interfaces/lib/chrome/chrome-app.d.ts' />

// We use the launch window for debugging.
// TODO: Have a version of the UI here also.
function launchWindow(launchData) {
  chrome.app.window.create('scraps/launch.html', {
    id: 'uproxy',
    minWidth: 640,
    minHeight: 480
  });
}
chrome.app.runtime.onLaunched.addListener(launchWindow);

// We use the launch window for debugging WebRTC.
function launchWebRtcTestWindow() {
  chrome.app.window.create('scraps/webrtc-test.html', {
    id: 'webrtc-test',
    minWidth: 640,
    minHeight: 480
  });
}