import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shape-synger',
  webDir: 'www',
  server: {
    hostname: 'https://shape-synger-back.vercel.app',
    androidScheme: 'https',
  },
};

export default config;
