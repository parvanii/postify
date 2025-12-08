console.log('ENV DATABASE_URL is set?', !!process.env.DATABASE_URL);
if (process.env.DATABASE_URL) {
  console.log(process.env.DATABASE_URL.replace(/:[^@]+@/, ':REDACTED@'));
}
