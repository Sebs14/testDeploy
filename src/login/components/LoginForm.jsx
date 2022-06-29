

export default function RegisterForm(){
    return(
        <form>
        <div className="mb-4">
          <div className="mb-4 ">
            <label
              class="block mb-2 text-sm font-bold dark:text-white"
              htmlFor="firstName"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="registerFirstName"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold dark:text-white"
            htmlFor="registerEmail"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="registerEmail"
            type="email"
            placeholder="Email"
          />
        </div>
        
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:shadow-outline dark:bg-emerald-800 dark:hover:bg-emerald-900"
            type="button"
          >
            Log In
          </button>
        </div>
      </form>
    );
}