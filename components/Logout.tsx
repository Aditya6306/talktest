"use client"
import { signOut } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";
const Logout = () => {
    const handleLogout = async () => {
    try {
      await signOut();
      console.log("User logged out successfully");

      // Optional: redirect or clear local state
      toast.success("User logged out successfully");
      redirect("/login");
    } catch (error) {
      console.log(error);
      toast.error(`There was an error: ${error}`);
    }
  };
  return (
    <div>
      <Button onClick={handleLogout} className="btn-ghost absolute -top-20 right-4 z-50 max-sm:px-3 max-sm:py-2">
        Logout
      </Button>
    </div>
  )
}

export default Logout