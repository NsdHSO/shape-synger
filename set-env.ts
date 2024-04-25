const fs = require('fs');
const environment = `
export const environment = {
  production: true,
  apiOverViewUrl: 'http://localhost:3000/overview',
  supabaseUrl: \`${process.env['supabaseUrl']}\`,
  supabaseKey: \`${process.env['supabaseKey']}\`,
};`;

// Generate environment.ts file
fs.writeFile(
  './src/environments/environment.prod.ts',
  environment,
  function (err: any) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(`Angular environment.prod.ts file generated`);
    }
  },
);
fs.writeFile(
  './src/environments/environment.ts',
  environment,
  function (err: any) {
    if (err) {
      throw console.error(err);
    } else {
      console.log(`Angular environment.ts file generated`);
    }
  },
);
