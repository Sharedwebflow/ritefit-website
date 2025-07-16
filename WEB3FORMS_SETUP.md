# Setting Up Web3Forms for RiteFit.AI Contact Form

## Overview
Web3Forms is a simple, free form backend service that allows you to receive form submissions directly to your email without needing any server-side code or API keys for basic usage.

## Setup Steps

### 1. Get Your Web3Forms Access Key
1. Go to https://web3forms.com/
2. Enter your email address where you want to receive form submissions
3. Click "Create Access Key"
4. You'll receive a unique access key (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### 2. Update the Contact Forms

#### For the React App (client/src/components/contact-form.tsx):
Replace `"YOUR_ACCESS_KEY_HERE"` on line 31 with your actual access key:
```typescript
formDataToSend.append("access_key", "your-actual-access-key-here");
```

#### For the Static Website (static_website/contact.html):
Replace `"YOUR_ACCESS_KEY_HERE"` on line 50 with your actual access key:
```html
<input type="hidden" name="access_key" value="your-actual-access-key-here">
```

### 3. Test the Contact Form
1. Start your application (`npm run dev`)
2. Navigate to the contact page
3. Fill out the form with test data
4. Submit the form
5. Check your email for the form submission

## How It Works

### React Version
- Uses JavaScript fetch API to send form data to Web3Forms
- Shows loading states and success/error messages
- Resets form after successful submission

### Static Version
- Uses standard HTML form submission to Web3Forms
- Includes hidden fields for access key, subject, and redirect URL
- Enhanced with JavaScript for better user experience

## Features Included

### Form Fields
- Full Name (required)
- Email Address (required)
- Phone Number
- Company Name
- Service Interest (dropdown)
- Message (required)

### Email Content
When someone submits the form, you'll receive an email with:
- Subject: "New Contact Form Submission from RiteFit.AI"
- All form field values
- Sender's email for easy reply

### User Experience
- Loading states during submission
- Success/error messages
- Form validation
- Responsive design
- Professional styling

## Benefits of Web3Forms

1. **No Backend Required**: Works with static websites
2. **Free**: No cost for basic usage
3. **No API Keys**: Simple email-based setup
4. **Spam Protection**: Built-in spam filtering
5. **Reliable**: Proven service used by many websites

## Customization Options

You can customize the form behavior by:
- Changing the redirect URL after submission
- Adding custom fields
- Modifying the email subject
- Adding file upload support
- Implementing custom validation

## Troubleshooting

If forms aren't working:
1. Check that the access key is correctly set
2. Verify your email address is confirmed with Web3Forms
3. Check browser console for any JavaScript errors
4. Ensure form fields have proper `name` attributes

## Support
For issues with Web3Forms service, visit their documentation at https://docs.web3forms.com/