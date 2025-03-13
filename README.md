# Portfolio Website

This is a **Single Page Portfolio Website** built using **React.js**, **Vite**, **TypeScript**, and **Tailwind CSS**. The project showcases your skills, projects, and a 'Get in Touch' feature that allows visitors to contact you via email.

## 🚀 Live Demo
[View Live on Vercel](<Your Live Link Here>)

## 📂 Features
- Modern and responsive design with Tailwind CSS.
- Projects and skills section to highlight your experience.
- 'Get in Touch' form integrated with **EmailJS** for direct email communication.
- Deployed seamlessly on **Vercel** for fast performance.

## 🛠️ Setup Instructions
```bash
# 1. Clone the Repository
git clone <repository-url>
cd <project-folder>

# 2. Install Dependencies
npm install

# 3. Create .env File
# Inside the root directory, create a `.env` file and add your EmailJS keys like this:
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_public_key

# 4. EmailJS Setup
# - Create an EmailJS account: https://www.emailjs.com/
# - Add a service (preferably GMail) in EmailJS.
# - Create a template with the following parameters:
#   - `name` — Sender's name
#   - `email` — Sender's email
#   - `subject` — Subject of the message
#   - `message` — Message content
# - Copy the generated Service ID, Template ID, and Public Key into your `.env` file.

# 5. Run the Project
npm run dev

# 6. Deployment
# The project is deployed on Vercel. For your own deployment:
npm i -g vercel
vercel
