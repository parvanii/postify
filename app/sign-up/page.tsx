import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5523E8]">
      
      <SignUp routing="hash" redirectUrl="/dashboard" />
    </div>
  );
}
