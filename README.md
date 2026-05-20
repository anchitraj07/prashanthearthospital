# Prashant Heart Hospital

A professional website for Prashant Heart Hospital showcasing world-class cardiology services in Begusarai, Bihar.

## 🌐 Live Website

Visit the live website: [https://anchitraj07.github.io/prashanthearthospital/](https://anchitraj07.github.io/prashanthearthospital/)

## 🚀 Features

- **Modern Design** - Clean, professional medical website with responsive layout
- **Cardiology Services** - Comprehensive information about heart care services
- **Doctor Profiles** - Detailed profiles of Dr. Prashant Kashyap and medical staff
- **Appointment Booking** - Online appointment booking system
- **Gallery** - Hospital facilities and medical equipment showcase
- **Health Blog** - Educational content and health tips
- **Contact Information** - Complete hospital contact details and location

## 🛠️ Technology Stack

- **Next.js 15** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Database and backend services

## 📱 Services Offered

- Advanced Cath Lab (Philips)
- 2D Echo & Stress Echo
- Angiography & Angioplasty
- TMT - Treadmill Test
- Holter Monitoring
- ECG Services
- Pacemaker Implantation
- Emergency Cardiac Care

## 👨‍⚕️ Medical Team

- **Dr. Prashant Kashyap** - Senior Cardiologist & Founder (MBBS, MD, DM Cardiology)
- **Dr. Seep Sethi** - Gynecologist (MBBS, MS OBGYN, FMAS, DMAS)
- **Dr. Dinesh Singh** - Senior Physician (MBBS, MD Medicine)

## 📞 Contact Information

- **Address:** Jyoti Kunj, I.M.A. Path Near T.V. Tower, Begusarai – 851 101, Bihar
- **Phone:** +91 80029 82980
- **Email:** prashantkashyap2804@gmail.com
- **WhatsApp:** +91 8084388876

## 🏥 About Prashant Heart Hospital

Prashant Heart Hospital is a premier cardiology center in Begusarai, Bihar, dedicated to providing world-class heart care services. We combine cutting-edge medical technology with compassionate patient care to deliver exceptional outcomes.

### Key Features:
- State-of-the-art Philips Cath Lab
- 24/7 Emergency Cardiac Care
- Experienced Medical Team
- Modern Hospital Infrastructure
- Patient-Centric Approach

## 📊 Statistics

- **10+ Years** of medical excellence
- **3000+** successful cardiac procedures
- **50,000+** happy patients
- **4.7★** average patient rating
- **24/7** emergency services

## 🔧 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anchitraj07/prashanthearthospital.git
cd Prashant-Heart-Hospital
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.local.example` to `.env.local` and replace the placeholders with your Supabase values.

```bash
copy .env.local.example .env.local
```

4. Create a Supabase project at https://app.supabase.com and note these values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

5. In Supabase, create the `appointments` table using the migration in `supabase/migrations/20260506213717_prashant_heart_hospital.sql` or paste that SQL into the SQL editor.

6. Make sure RLS is enabled and the policies are applied. The repository already includes RLS policy SQL in `supabase/migrations/20260506213717_prashant_heart_hospital.sql` and `supabase/migrations/20260517103000_rls_policy_updates.sql`.

7. Set `ADMIN_PASSWORD` to a strong secret and `ADMIN_SESSION_SECRET` to a long random string.

8. Start the development server:
```bash
npm run dev
```

9. Open [http://localhost:4028](http://localhost:4028) in your browser.

## 📁 Project Structure

```
Prashant-Heart-Hospital/
├── public/                 # Static assets and images
│   └── assets/
│       └── images/         # Hospital and doctor images
├── src/
│   ├── app/               # Next.js app router
│   │   ├── components/    # Page components
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable UI components
│   └── lib/               # Utility functions and configurations
├── next.config.mjs        # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Project dependencies
```

## 🚀 Deployment (Netlify)

This project is configured for deployment on Netlify using `netlify.toml`.

### Build Settings
- Build command: `npm run build`
- Publish directory: `.next` (see `netlify.toml`)

### Live Site
- https://prashant-heart-hospital.netlify.app/

## 📄 License

© 2024 Prashant Heart Hospital Pvt Ltd. All rights reserved.

## 📞 Get in Touch

Ready to book an appointment or have questions about our services? Contact us today!

- **Phone:** +91 80029 82980
- **WhatsApp:** +91 8084388876
- **Email:** prashantkashyap2804@gmail.com