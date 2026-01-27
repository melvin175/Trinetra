# EmailJS Setup Instructions

This guide will help you set up EmailJS to send emails from the contact form.

## Step 1: Install EmailJS Package

Run this command in your terminal:
```bash
npm install @emailjs/browser
```

## Step 2: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 3: Create Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. **Copy the Service ID** (e.g., `service_xxxxxxx`)

## Step 4: Create Email Template

1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Submission from Trinetra Website

**Content:**
```
New contact form submission from Trinetra website:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company_name}}
Phone: {{phone}}
Interest Type: {{interest_type}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy the Template ID** (e.g., `template_xxxxxxx`)

## Step 5: Get Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find **Public Key** section
3. **Copy the Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 6: Configure EmailJS Credentials

You have two options:

### Option A: Using Environment Variables (Recommended)

1. Create a `.env` file in the root directory:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the values with your actual EmailJS credentials

### Option B: Direct Configuration

Open `src/components/landing/Contact.tsx` and find these lines (around line 45):

```typescript
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
```

Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with your actual values.

## Step 7: Test

1. Fill out the contact form on your website
2. Click Submit
3. Check your email inbox (melvinfernando175@gmail.com)
4. You should receive the form submission email

## Troubleshooting

- Make sure all three IDs are correctly replaced
- Check browser console for any error messages
- Verify your EmailJS service is active
- Ensure your email service (Gmail) is properly connected in EmailJS

## Security Note

The Public Key is safe to expose in frontend code. EmailJS uses it to authenticate requests, but it's designed to be public.
