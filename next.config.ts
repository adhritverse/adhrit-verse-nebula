import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply to all routes
        source: "/(.*)",
        headers: [
          {
            // Block the APIs that trigger "wants to access other apps/services" popup on Android Chrome.
            // - bluetooth: Web Bluetooth API
            // - nfc: Web NFC API
            // - usb: WebUSB API
            // - serial: Web Serial API
            // - identity-credentials-get: FedCM (Federated Credential Management) — causes the popup
            key: "Permissions-Policy",
            value:
              "bluetooth=(), nfc=(), usb=(), serial=(), identity-credentials-get=()",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
