import { pool } from './db.js';

async function checkOrderSchema() {
  try {
    console.log('\n--- Table Schema (public.orders) ---');
    const resColumns = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'orders' AND table_schema = 'public'
    `);
    if (resColumns.rows.length === 0) {
      console.log('❌ Table "orders" does not exist in public schema.');
    } else {
      resColumns.rows.forEach(col => {
        console.log(`${col.column_name}: ${col.data_type}`);
      });
    }

    console.log('\n--- Table Schema (public.order_items) ---');
    const resItems = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'order_items' AND table_schema = 'public'
    `);
    resItems.rows.forEach(col => {
      console.log(`${col.column_name}: ${col.data_type}`);
    });

    process.exit(0);
  } catch (err) {
    console.error('❌ Error!');
    console.error('Error details:', err.message);
    process.exit(1);
  }
}

checkOrderSchema();
