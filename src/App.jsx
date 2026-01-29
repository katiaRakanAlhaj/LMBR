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
import i18next from "i18next";
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
      networkMode: "offlineFirst", // This is a new option in React Query v4+
    },
  },
});

function App() {
  const [language, setLanguage] = useState(() => {
    // Try to get language from URL first, then localStorage
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(en|ar)(\/|$)/);
    return langMatch ? langMatch[1] : localStorage.getItem("language") || "ar";
  });

  // Initialize language on mount
  useEffect(() => {
    const path = window.location.pathname;
    const langMatch = path.match(/^\/(en|ar)(\/|$)/);
    const urlLang = langMatch ? langMatch[1] : null;
    const storedLang = localStorage.getItem("language") || "ar";

    if (urlLang) {
      // If URL has language, use it
      if (language !== urlLang) {
        i18n.changeLanguage(urlLang);
        setLanguage(urlLang);
        localStorage.setItem("language", urlLang);
      }
    } else if (storedLang && (path === "/" || path === "")) {
      // If no language in URL and we're at root, navigate to language version
      window.location.replace(`/${storedLang}`);
    }
    // If we're already on a page without language prefix (not root), leave it as is
    // The router will handle it through the catch-all route
  }, []);

  // Create router with both patterns: with language prefix and without
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Route with language prefix - this is the main pattern */}
        <Route path=":lang">
          <Route path="" element={<Wrapper />}>
            <Route path="" element={<Home />} />
            <Route path="vission" element={<VissionAndMission />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="goals" element={<Goals />} />
            <Route path="certificates" element={<Certificates />} />
            <Route path="contact" element={<Contact />} />
            <Route path="health_and_safety" element={<HealthAndSafety />} />
            <Route path="service/:id" element={<SingleService />} />
            <Route path="project/:id" element={<SingleProject />} />
            <Route path="company_equipment" element={<CompanyEquipment />} />
            <Route path="company1" element={<ModelOne />} />
            <Route path="company2" element={<ModelTwo />} />
            <Route path="company3" element={<ModelThree />} />
            <Route path="company/:id" element={<CompanyDetails />} />
          </Route>
        </Route>

        {/* Catch-all route for root and other paths without language prefix */}
        <Route path="*" element={<Wrapper />}>
          <Route path="" element={<Home />} />
          <Route path="vission" element={<VissionAndMission />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="goals" element={<Goals />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<Contact />} />
          <Route path="health_and_safety" element={<HealthAndSafety />} />
          <Route path="service/:id" element={<SingleService />} />
          <Route path="project/:id" element={<SingleProject />} />
          <Route path="company_equipment" element={<CompanyEquipment />} />
          <Route path="company1" element={<ModelOne />} />
          <Route path="company2" element={<ModelTwo />} />
          <Route path="company3" element={<ModelThree />} />
          <Route path="company/:id" element={<CompanyDetails />} />
        </Route>
      </>,
    ),
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
