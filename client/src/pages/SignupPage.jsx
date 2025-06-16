export function SignupPage() {
  return (
    <form method="POST" action="/api/auth/signup" className="p-4 space-y-4">
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <input name="password" type="password" placeholder="Password" className="border p-2 w-full" />
      <button className="bg-green-600 text-white px-4 py-2">Sign Up</button>
    </form>
  );
}