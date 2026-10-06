import { LeadsPanel } from "@/components/admin/LeadsPanel";
import { readLeads } from "@/lib/leads-store";

export default async function AdminLeadsPage() {
  const leads = await readLeads();
  return <LeadsPanel initialLeads={leads} />;
}
