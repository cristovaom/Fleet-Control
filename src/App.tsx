import "./index.css";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Toaster } from "sonner";
import { router } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="fleet-control-theme">
        <Helmet titleTemplate="%s | Fleet Control" />
        <Toaster richColors closeButton />
        <QueryClientProvider client={queryClient}>
          <SpeedInsights />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
