import { pool } from './db.js';

async function testConnection() {
  try {
    const resTime = await pool.query('SELECT NOW()');
    console.log('✅ Connection successful!');
    console.log('Database time:', resTime.rows[0].now);

    console.log('\n--- Table Schema (public.users) ---');
    const resColumns = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'users' AND table_schema = 'public'
    `);
    resColumns.rows.forEach(col => {
      console.log(`${col.column_name}: ${col.data_type}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Error!');
    console.error('Error details:', err.message);
    process.exit(1);
  }
}

testConnection();
