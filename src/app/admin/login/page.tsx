import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-svh bg-[#f4f7f6]" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
