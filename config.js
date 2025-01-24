const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = "https://ksiadqcrthcnpxmnhxxx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzaWFkcWNydGhjbnB4bW5oeHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2ODU0NjIsImV4cCI6MjA1MzI2MTQ2Mn0.2fW5eEFWNOB-krwbnCOV6D3cY-oucCQaLG1cNrqeTE0";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;
