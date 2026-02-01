import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import i18n from "./i18n";
import { useState, useEffect } from "react";
import { MyContext } from "./component/store";

// 🟨 React Query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Wrapper from "./component/wrapper/wrapper";
import Home from "./pages/Home";
import VissionAndMission from "./pages/about/vission_mission";
import AboutUs from "./pages/about/about_us";
import Goals from "./pages/about/goals";
import Certificates from "./pages/certificates";
import Contact from "./pages/contact";
import HealthAndSafety from "./pages/health_and_safety";
import SingleService from "./pages/single_service";
import SingleProject from "./pages/single_project";
import CompanyEquipment from "./pages/compmany_equipment";
import ModelOne from "./pages/companyModel.jsx/model_one";
import ModelTwo from "./pages/companyModel.jsx/model_two";
import ModelThree from "./pages/companyModel.jsx/model_three";
import CompanyDetails from "./pages/companyModel.jsx/company_details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      refetchIntervalInBackground: true,
      retry: 2,
      networkMode: "offlineFirst",
    },
  },
});

function App() {
  const [language, setLanguage] = useState(() => {
    // Get initial language from localStorage or default to 'ar'
    return localStorage.getItem("language") || "ar";
  });

  // Initialize language and handle routing on mount
  useEffect(() => {
    const path = window.location.pathname;
    
    // Check if we have a language in the URL
    const langMatch = path.match(/^\/(en|ar)(\/|$)/);
    
    if (langMatch) {
      // URL has language, use it
      const urlLang = langMatch[1];
      if (language !== urlLang) {
        i18n.changeLanguage(urlLang);
        setLanguage(urlLang);
        localStorage.setItem("language", urlLang);
      }
    } else if (path === '/' || path === '') {
      // No language in URL at root, redirect to default language
      const defaultLang = localStorage.getItem("language") || "ar";
      window.location.replace(`/${defaultLang}`);
    }
  }, []);

  // Create router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Root path - redirect to default language */}
        <Route 
          path="/" 
          element={<div style={{ display: 'none' }}>Redirecting...</div>}
          loader={() => {
            const lang = localStorage.getItem("language") || "ar";
            window.location.replace(`/${lang}`);
            return null;
          }}
        />
        
        {/* Language-specific routes */}
        <Route path=":lang">
          <Route path="" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="vission" element={<VissionAndMission />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="goals" element={<Goals />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
            <Route path="health_and_safety" element={<HealthAndSafety />} />
            <Route path="service/:id" element={<SingleService />} />
            <Route path="project/:id" element={<SingleProject />} />
            <Route path="company_equipment" element={<CompanyEquipment />} />
            <Route path="company/:id" element={<CompanyDetails />} />
          </Route>
        </Route>
        
        {/* Catch-all route */}
        <Route 
          path="*" 
          element={<div>Page not found</div>}
        />
      </>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div dir={language === "ar" ? "rtl" : "ltr"}>
        <MyContext.Provider value={{ language, setLanguage }}>
          <RouterProvider router={router} />
        </MyContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;