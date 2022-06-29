import { useRef } from "react";
import useForm from "../RegForm";

const FORM_ENDPOINT = "http://localhost:3000/Login"; // TODO - fill on the later step

const Form = () => {
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = useForm({
    form: formElement.current,
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div className="text-2xl">Something bad happened!</div>
        <div className="text-md">{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_self"
      ref={formElement}
    >
        <div className="mb-4">
          <div className="mb-4 ">
            <label
              class="block mb-2 text-sm font-bold dark:text-white"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold dark:text-white"
            htmlFor="registerEmail"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </div>
          <div class="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-bold dark:text-white"
              htmlhtmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
        {status !== "loading" && (
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none focus:shadow-outline dark:bg-emerald-800 dark:hover:bg-emerald-900"
            type="submit"
          >
            Register Account
          </button>
        </div>
        )}
      </form>
  );
        };

export default Form;



