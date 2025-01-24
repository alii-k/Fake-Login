import express from 'express';
import { createClient } from '@supabase/supabase-js';

import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL
const sql = postgres(connectionString)

export default sql

const SUPABASE_URL = 'https://ksiadqcrthcnpxmnhxxx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzaWFkcWNydGhjbnB4bW5oeHh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2ODU0NjIsImV4cCI6MjA1MzI2MTQ2Mn0.2fW5eEFWNOB-krwbnCOV6D3cY-oucCQaLG1cNrqeTE0';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const app = express();
const port = 3000;

app.use(express.json());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const { data, error } = await supabase
            .from('users')
            .insert([{ username, password }]);

        if (error) throw error;

        res.status(201).json({ message: 'تم حفظ البيانات بنجاح!', data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'حدث خطأ أثناء حفظ البيانات', error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
