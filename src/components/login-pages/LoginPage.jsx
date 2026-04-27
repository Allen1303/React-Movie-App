import LoginForm from "../login-pages/LoginForm";
export default function LoginPage({ onLogin }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <LoginForm onLogin={onLogin} />
    </div>
  );
}
