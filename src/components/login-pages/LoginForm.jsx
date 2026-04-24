import { LogIn } from "lucide-react";
export default function LoginForm() {
  return (
    <form className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-1">
          Login Form
        </h1>
      </header>
      <fieldset className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5
	"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-900 placeholder:text-slate-350 "
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-1.5"
          >
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 placeholder:text-slate-350"
          />
        </div>
        <button
          type="submit"
          className=" flex items-center justify-center gap-2 px-4 py-2 w-full h-11 bg-sky-600 hover:bg-sky-800 active:scale-[0.98] text-white text-sm font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogIn className="w-5 h-5" />
          Sign in
        </button>
      </fieldset>
    </form>
  );
}
