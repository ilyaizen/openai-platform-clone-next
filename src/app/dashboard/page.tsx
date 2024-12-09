import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <div className="fixed inset-0 flex flex-col">
        <AppHeader />
        <div className="flex min-h-0 flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex h-full flex-col overflow-auto pb-12 pr-2">
              <div className="min-h-full rounded-xl border bg-muted/50 p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                  <div className="aspect-video rounded-xl bg-muted/50" />
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
