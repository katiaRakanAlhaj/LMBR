import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import i18n from "./i18n";
import { useState } from "react";
import { MyContext } from "./component/store";

// 🟨 React Query setup
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18next from "i18next";
import Wrapper from './component/wrapper/wrapper';
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
import ModelOne from './pages/companyModel.jsx/model_one';
import ModelTwo from "./pages/companyModel.jsx/model_two";
import ModelThree from './pages/companyModel.jsx/model_three';
import CompanyDetails from "./pages/companyModel.jsx/company_details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ❌ لا تعيد الجلب عند الرجوع للنافذة (لتقليل استهلاك الإنترنت)
      refetchOnWindowFocus: false,

      // ✅ البيانات تعتبر حديثة لمدة 5 دقائق (لن يعيد الجلب خلال هذه الفترة)
      staleTime: 1000 * 60 * 5, // 5 دقائق

      // ✅ حتى لو النافذة غير مفعلة (في الخلفية)
      refetchIntervalInBackground: true,

      // ✅ محاولات إعادة الجلب في حالة الخطأ (مفيدة للاتصال الضعيف)
      retry: 2,
    },
  },
});

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       staleTime: Infinity, // Data will always be considered fresh
//       refetchInterval: false, // Ensures no polling
//     },
//   },
// });

function App() {
  const [language, setLanguage] = useState(false);
  const fontFamily =
    i18next.language === "en" ? "Lato, sans-serif" : "ShamelSansOne";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/vission" element={<VissionAndMission />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health_and_safety" element={<HealthAndSafety />} />
          <Route path="service/:id" element={<SingleService />} />
          <Route path="project/:id" element={<SingleProject />} />
          <Route path="/company_equipment" element={<CompanyEquipment />} />
          <Route path="/company1" element={<ModelOne />} />
          <Route path="/company2" element={<ModelTwo />} />
           <Route path="/company3" element={<ModelThree />} />
           <Route path="/company/:id" element={<CompanyDetails />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div

        dir={i18n.language === "ar" ? "rtl" : "ltr"}
      >
        <MyContext.Provider value={{ language, setLanguage }}>
          <RouterProvider router={router} />
        </MyContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
