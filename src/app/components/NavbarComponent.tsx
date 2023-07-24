import { ButtonComponent } from "./ButtonComponent";

export function NavbarComponent() {
  return (
    <>
      <div className="flex h-20 items-center shadow-md w-full z-10">
        <div className="ml-10 text-2xl font-bold text-green-500">
          <h1>TokoMeLia</h1>
        </div>
        <div className="flex ml-auto mr-5">
          <ButtonComponent
            name="Sign in"
            style="bg-white rounded-lg px-2 py-2 text-green-500 border-green-500 border font-bold mr-5"
            to="/login"
          />
          <ButtonComponent
            name="Sign up"
            style="bg-green-500 rounded-lg px-2 py-2 text-white border font-bold"
            to="/register"
          />
        </div>
      </div>
    </>
  );
}
