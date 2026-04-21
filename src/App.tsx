import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Vex } from "./pages/Vex";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vex" element={<Vex />} />
      </Routes>
    </main>
  );
}
