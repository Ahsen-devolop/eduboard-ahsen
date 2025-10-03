// src/App.tsx
import type { JSX } from "react";
import Logo from "./components/Logo";
import gorsel from "./assets/gorsel.png";   // ✅ görseli import et

export default function App(): JSX.Element {
  return (
    <>
      <Logo />
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img src={gorsel} alt="görsel" style={{ maxWidth: "600px", width: "100%" }} />
      </div>
    </>
  );
}
