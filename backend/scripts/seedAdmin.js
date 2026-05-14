import bcrypt from 'bcrypt';
import { query } from '../db.js';
import dotenv from 'dotenv';

dotenv.config();

async function createAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL || 'admin@ecommerce.com';
    const password = process.env.ADMIN_PASSWORD || 'Admin@123';

    const adminExists = await query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);

    if (adminExists.rows.length === 0) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      
      await query(
        `INSERT INTO users (firstname, lastname, email, password, role, isverified, createdat, updatedat) 
         VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())`,
        ['Admin', 'User', email.toLowerCase(), hashedPassword, 'admin', true]
      );
      console.log('✅ Admin user created successfully');
    } else {
      // Ensure existing user has admin role
      await query('UPDATE users SET role = $1 WHERE email = $2', ['admin', email.toLowerCase()]);
      console.log('ℹ️ Admin user already exists, role updated to admin if it wasn\'t.');
    }
    process.exit(0);
  } catch (err) {
    console.error('❌ Error creating admin user:', err);
    process.exit(1);
  }
}

createAdmin();
