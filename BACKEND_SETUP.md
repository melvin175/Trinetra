# Backend API Setup for Contact Form

This guide shows you how to set up a simple backend API to send emails without using third-party services.

## Option 1: Node.js/Express Backend (Recommended)

### Step 1: Install Backend Dependencies

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

### Step 2: Configure Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Create a new app password for "Mail"
5. Copy the generated 16-character password

### Step 3: Create Environment File

Create a `.env` file in the `server` directory:

```env
EMAIL_USER=melvinfernando175@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
PORT=3001
```

### Step 4: Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The server will run on `http://localhost:3001`

### Step 5: Update Frontend Environment

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001/api/contact
```

For production, update this to your deployed backend URL.

## Option 2: Serverless Function (Vercel/Netlify)

### Vercel Serverless Function

Create `api/contact.js`:

```javascript
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${req.body.fromName}" <${process.env.EMAIL_USER}>`,
      to: 'melvinfernando175@gmail.com',
      replyTo: req.body.from,
      subject: req.body.subject,
      html: req.body.html,
      text: req.body.text,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

### Netlify Serverless Function

Create `netlify/functions/contact.js`:

```javascript
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const data = JSON.parse(event.body);
    
    await transporter.sendMail({
      from: `"${data.fromName}" <${process.env.EMAIL_USER}>`,
      to: 'melvinfernando175@gmail.com',
      replyTo: data.from,
      subject: data.subject,
      html: data.html,
      text: data.text,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
```

## Option 3: Simple Mailto Fallback (No Backend)

If you don't want any backend, you can use a simple mailto link:

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const subject = encodeURIComponent(`Contact Form: ${formData.interestType}`);
  const body = encodeURIComponent(`
Name: ${formData.fullName}
Email: ${formData.email}
Company: ${formData.companyName}
Phone: ${formData.phone}
Interest Type: ${formData.interestType}

Message:
${formData.message}
  `);
  
  window.location.href = `mailto:melvinfernando175@gmail.com?subject=${subject}&body=${body}`;
};
```

## Testing

1. Start your backend server (if using Option 1)
2. Fill out the contact form on your website
3. Click Submit
4. Check melvinfernando175@gmail.com for the email

## Security Notes

- Never commit `.env` files to git
- Use environment variables for sensitive data
- Consider rate limiting for production
- Validate and sanitize all input data
