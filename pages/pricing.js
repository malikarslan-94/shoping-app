import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";

import Header from "../components/Header";
import { useState } from "react";

function pricing() {
  const [pricingHeader, setPricingHeader] = useState(true);
  return (
    <div class="bg-white overflow-hidden max-w-full mx-auto">
      No Data
    </div>
  );
}
export default pricing;
