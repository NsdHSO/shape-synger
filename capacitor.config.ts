import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shape-synger',
  webDir: 'www',
  server: {
    hostname: 'localhost:4200',
    androidScheme: 'http',
  },
};

export default config;
