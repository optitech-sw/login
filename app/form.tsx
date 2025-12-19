export function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-6 bg-gray-50 px-4 sm:px-12 w-full py-6"
    >
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-postadress/Kundnummer"
          autoComplete="email"
          required
          className="block w-full appearance-none border border-gray-400 hover:border-gray-600 bg-white px-3 py-2.5 text-sm placeholder-gray-600 focus:border-blue-600 focus:outline-none transition-all"
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Lösenord"
          required
          className="block w-full appearance-none border border-gray-400 hover:border-gray-600 bg-white px-3 py-2.5 text-sm placeholder-gray-600 focus:border-blue-600 focus:outline-none transition-all"
        />
      </div>
      <div className="flex items-center">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
          Kom ihåg mig
        </label>
      </div>
      {children}
    </form>
  );
}
