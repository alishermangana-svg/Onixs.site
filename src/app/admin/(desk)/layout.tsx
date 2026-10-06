import { AdminShell } from "@/components/admin/AdminShell";
import { readLeads } from "@/lib/leads-store";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const leads = await readLeads();
  const newCount = leads.filter((l) => l.status === "new").length;

  return <AdminShell newCount={newCount}>{children}</AdminShell>;
}
