import { pool } from './db.js';

async function testConnection() {
  try {
    const dbUrl = process.env.DATABASE_URL || 'UNDEFINED';
    console.log('Attempting to connect to Supabase...');
    console.log('Using URL:', dbUrl.replace(/:[^:]+@/, ':****@')); 
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful!');
    console.log('Database time:', res.rows[0].now);

    const columns = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND table_schema = 'public'
    `);
    console.log('📋 "public.users" columns:', columns.rows.map(r => `${r.column_name} (${r.data_type})`).join(', '));
    process.exit(0);
  } catch (err) {
    console.error('❌ Connection failed!');
    console.error('Error details:', err.message);
    process.exit(1);
  }
}

testConnection();
