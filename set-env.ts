const fs = require('fs');
const environment = `
export const environment = {
  production: true,
  apiOverViewUrl: \`${process.env['apiOverViewUrl']}\`,
  supabaseUrl: \`${process.env['supabaseUrl']}\`,
  supabaseKey: \`${process.env['supabaseKey']}\`,
  login:{
    authLoginUrl:\`${process.env['authLoginUrl']}\`,
    responseType:\`${process.env['responseType']}\`,
    loginURL:\`${process.env['loginURL']}\`,
    redirect_uri:\`${process.env['redirect_uri']}\`,
    scope:\`${process.env['scope']}\`,
    client_id:\`${process.env['client_id']}
      }
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
