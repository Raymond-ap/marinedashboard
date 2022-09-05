export default function StatusCard({ color, icon, title, amount }) {
  return (
    <div className="px-4 text-center py-3 flex flex-col items-center justify-center bg-white rounded-md w-full shadow-md">
      <div className={`w-16 h-16 rounded-full mb-2 bg-${color}-500 flex items-center justify-center`}>
        {icon}
      </div>
      <h1 className="text-base font-extrabold tracking-wider">{amount}</h1>
      <p className="text-gray-700 text-sm mt-2 capitalize font-bold">{title}</p>
    </div>
  );
}
