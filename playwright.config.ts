import { devices, PlaywrightTestConfig } from '@playwright/test';

let config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1200, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'Mobile',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 12'],
      },
    },
  ],
  testDir: 'specs',
  reporter: [['html', { open: 'never' }]],
};

export default config;
