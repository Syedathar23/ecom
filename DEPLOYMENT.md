# Deployment Guide: Docker + CI/CD with GitHub Actions

This project is set up for automated deployment to an AWS EC2 instance using Docker and GitHub Actions.

## 1. Local Development (Docker)

To run the full stack locally using Docker:

1. Copy `.env.example` to `backend/.env` and fill in the values.
2. Run:
   ```bash
   docker compose up --build
   ```
   - Frontend will be at: `http://localhost:5173`
   - Backend will be at: `http://localhost:5000`

## 2. EC2 Instance Setup

1. Launch an Ubuntu EC2 instance.
2. Ensure Security Groups allow inbound traffic on ports **80** (HTTP) and **22** (SSH).
3. Connect to your instance and run the `ec2-setup.sh` script:
   ```bash
   chmod +x ec2-setup.sh
   ./ec2-setup.sh
   ```

## 3. GitHub Secrets Configuration

Add the following secrets in your GitHub repository settings (**Settings > Secrets and variables > Actions**):

| Secret Name | Description |
| ----------- | ----------- |
| `EC2_HOST` | Public IP or DNS of your EC2 instance |
| `EC2_USER` | Usually `ubuntu` |
| `EC2_SSH_KEY` | Your private key (`.pem` content) |
| `DATABASE_URL` | Supabase connection string |
| `DIRECT_URL` | Supabase direct connection string |
| `JWT_SECRET_KEY` | Secret for token signing |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `APP_CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `APP_CLOUDINARY_API_KEY` | Cloudinary API key |
| `APP_CLOUDINARY_SECRET_KEY` | Cloudinary secret key |
| ... | All other variables from `.env.example` |

## 4. Deployment Flow

1. Every push to the `main` branch triggers the GitHub Actions workflow.
2. It builds the `.env` file from GitHub Secrets.
3. It copies the project files to the EC2 instance.
4. It restarts the Docker containers with the latest code.

## Rollback Strategy

In case of a failed deployment:
1. Revert the last commit on the `main` branch.
2. The CI/CD pipeline will automatically re-deploy the previous working version.

## Monitoring

- View logs: `docker compose logs -f`
- Check container health: `docker ps`
