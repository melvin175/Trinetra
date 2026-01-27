# Quick Start: Backend API Setup

To fix the "failed to fetch" error and send emails automatically:

## Step 1: Install Backend Dependencies

```bash
cd server
npm install
```

## Step 2: Create Gmail App Password

1. Go to: https://myaccount.google.com/apppasswords
2. Sign in with melvinfernando175@gmail.com
3. Select "Mail" and "Other (Custom name)"
4. Enter "Trinetra Contact Form"
5. Click "Generate"
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 3: Create .env File

Create `server/.env`:

```env
EMAIL_USER=melvinfernando175@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
PORT=3001
```

Replace `abcdefghijklmnop` with your actual app password (remove spaces).

## Step 4: Start Backend Server

```bash
cd server
npm start
```

You should see:
```
Server running on http://localhost:3001
Contact API endpoint: http://localhost:3001/api/contact
```

## Step 5: Test the Form

1. Keep the backend server running
2. Go to your website
3. Fill out and submit the contact form
4. Check melvinfernando175@gmail.com for the email

## Troubleshooting

- **"Failed to fetch"**: Make sure the backend server is running on port 3001
- **"Authentication failed"**: Check your Gmail app password is correct
- **Port already in use**: Change PORT in .env to a different number (e.g., 3002)

## Keep Server Running

For production, you'll need to deploy the backend server or use a service like:
- Railway
- Render
- Heroku
- DigitalOcean App Platform
