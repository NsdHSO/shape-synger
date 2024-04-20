import { writeFile } from 'fs';

export const environment = {
  production: true,
  apiOverViewUrl: 'http://localhost:3000/overview',
  supabaseUrl: ${process.env.supabaseUrl},
  supabaseKey: ${process.enb.supabaseKey}
};

// Generate environment.ts file
writeFile('./src/environments/environment.ts', environment, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated`);
  }
});
