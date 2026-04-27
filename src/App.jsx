import { useState } from "react";
import LoginPage from "./components/login-pages/LoginPage";
import Dashboard from "./components/layout/Dashboard";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) <LoginPage onLogin={setIsLoggedIn} />;

  return (
    <div className="min-h-screen bg-slate-100">
      <Dashboard />
    </div>
  );
}
export default App;
