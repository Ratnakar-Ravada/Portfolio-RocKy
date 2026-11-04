import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Workbench from "./components/personal/Workbench";

function MissingPage() {
  return (
    <main className="missing-page">
      <span className="eyebrow">404 / UNCHARTED TERRITORY</span>
      <h1>
        This path is
        <br />
        still a mystery.
      </h1>
      <p>There are plenty of other rabbit holes here.</p>
      <Link className="button button-dark" to="/">
        Back to the beginning ↗
      </Link>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Workbench />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
