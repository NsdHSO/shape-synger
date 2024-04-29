import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shape-synger',
  webDir: 'www',
  server: {
    hostname: 'shape-synger',
    androidScheme: 'https',
  },
};

export default config;
