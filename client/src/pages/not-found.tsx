import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md border border-white/15 bg-[#111111] p-8 sm:p-10">
        <div className="flex mb-4 gap-3 items-center">
          <AlertCircle className="h-8 w-8 text-primary shrink-0" />
          <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
        </div>

        <p className="mt-4 type-body text-white/70">
          Did you forget to add the page to the router?
        </p>
      </div>
    </div>
  );
}
