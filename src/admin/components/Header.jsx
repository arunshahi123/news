import { Menu } from "lucide-react";

export default function Header({ setOpen }) {
  return (
    <header className="bg-white shadow-sm px-4 py-2 flex justify-between items-center">

      <div className="flex items-center gap-3">

        <button className="lg:hidden" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>

        <h2 className="text-lg font-semibold">Dashboard</h2>

      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block text-gray-500 text-sm">Welcome Admin</div>

        <img src="https://ui-avatars.com/api/?name=Admin" className="w-8 h-8 rounded-full" alt="Admin" />
      </div>

    </header>
  )
}