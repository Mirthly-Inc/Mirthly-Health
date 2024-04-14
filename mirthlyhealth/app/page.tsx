export default function Home() {
  return (
    <div>
      <div className="flex w-full flex-col">
        <div className="w-full justify-between p-4">
          <div>Mirthly Health</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-black text-white rounded-xl">
              Sign Up
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-xl">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
