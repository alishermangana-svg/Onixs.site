import { SettingsForm } from "@/components/admin/SettingsForm";
import { readSettings } from "@/lib/settings-store";

export default async function AdminSettingsPage() {
  const settings = await readSettings();
  return <SettingsForm initial={settings} />;
}
