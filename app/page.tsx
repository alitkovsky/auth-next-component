import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins ({
  weight: ["600"],
  subsets: ["latin"]
});

export default function Home() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-indigo-500">
        <div className="space-y-6 text-center">
          <h1 className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}>
            Login
          </h1>
          <p className="text-white text-lg drop-shadow-md">
            You can login with your registered account or quick login with your Google or GitHub account.
          </p>
          <div>
            <LoginButton>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>
      </main>
      {/* bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 */}
    </>
  )
}