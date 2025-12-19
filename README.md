# 🚀 Postify 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-5A67D8?style=for-the-badge&logo=clerk&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Neon](https://img.shields.io/badge/Neon)

**Postify** is your ultimate **social media content generator** – designed to help creators, marketers, and enthusiasts generate content people **can't ignore**. Whether you need Instagram captions, blog ideas, YouTube descriptions, or Reddit posts, Postify turns your ideas into ready-to-publish content **instantly**. 💡  

---

## 🌟 Why Postify?  

In today’s digital world, **content is king** 👑 – but consistently creating engaging, high-quality content can be **time-consuming and exhausting**. Postify solves this problem by:  

- ✨ Generating **creative, polished, and relevant content instantly**  
- 🎯 Helping maintain a **consistent brand voice** across multiple platforms 
- ⏱ Saving you **hours of brainstorming and writing**  
- 💻 Streamlining your content creation process with a **fully interactive dashboard**  

With Postify, you focus on your **ideas**, while the app handles the **writing, formatting, and fine-tuning**.  

---

## 🖥️ Key Features  

### **1️⃣ Interactive UI & Landing Page**  
- Built with **Next.js** and **React** for **blazing fast performance** ⚡  
- **Framer Motion** animations bring life to transitions and UI interactions 🎨  
- Sections include:  
  - 🏠 **Home** – Explore Postify and its capabilities  
  - 🌈 **Features** – Detailed overview of what you can generate  
  - 💰 **Pricing** – Compare Free vs Premium plans  
  - ✉️ **Contact** – Reach out for support or collaboration  

---

### **2️⃣ Authentication & Billing**  
- **Clerk integration** for **secure login/signup** 🔐  
- **Two Plans**:  
  - 🆓 **Free Plan** – 10,000 credits/month  
  - 💎 **Premium Plan** – 25,000 credits/month for power users  
- Users are guided to an **interactive dashboard** immediately after signing up 🎉  

---

### **3️⃣ Dashboard & Content Generation**  

- **Template Cards**:  
  - 📸 Instagram Captions  
  - 👽 Reddit Posts  
  - 🐦 X Posts / Twitter  
  - 📘 Facebook Posts  
  - 📝 Blog Content Ideas  
  - 🔄 Text Rewriter (Plagiarism-free)  
  - ✔️ English Grammar Check  
  - 🎥 YouTube Descriptions  
  - …and more on the way!  

- **Post Customization Options**:  
  - 🔢 Choose **number of posts** to generate  
  - 😄 Select **tone of voice**: Polite, Witty, Enthusiastic, Friendly, Informational, Funny, etc.  
  - 🖋 Set **approximate word count**  
  - 🏷 Include **hashtags**, emojis, and even **custom prompts**  

- **Text Output**:  
  - Powered by **OpenRouter AI** 🤖  
  - Integrated **Toast UI Editor** – format text with **bold, italic, underline**, lists, links, and more ✍️  
  - **Copy to clipboard** feature for instant use 📋  

---

### **4️⃣ Dashboard Features**  
- 🕒 **History** – View previously generated content with a single click  
- 💳 **Billing** – Upgrade or manage your plan seamlessly  
- ⚙️ **Settings** – Customize your profile and preferences  

---
## 🏁 Getting Started 

### Prerequisites  
- **Node.js** 18+  
- **npm**, **yarn**, or **pnpm**  

### Installation  

Clone the repository:  
```bash
git clone https://github.com/yourusername/postify.git
cd postify

```
Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```
Environment Variables:
```bash
# Database
DATABASE_URL="your-neon-database-url"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"

# OpenRouter AI
OPENROUTER_API_KEY="your-openrouter-api-key"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```
Database Setup
```bash
npx prisma generate
npx prisma db push
```
Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open your browser and navigate to:
👉 http://localhost:3000


