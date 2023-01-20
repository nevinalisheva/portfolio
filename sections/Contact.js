import { useForm, ValidationError } from "@formspree/react";

function Contact({theme}) {
  const [state, handleSubmit] = useForm("mjvdvjej");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <div id="contact">
      <section className="bg-white dark:bg-neutral-900">
        <div className=" md:h-28 h-20 bg-white dark:bg-zinc-700">
          <h1 className=" text-2xl md:text-4xl font-bold md:py-20 text-center md:text-left p-12 sm:p-14 animate-pulse">
            Get in touch
          </h1>
        </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mjvdvjej"
        className="bg-[#F1F1F1] dark:bg-neutral-900 p-14 rounded-lg shadow-md dark:shadow-white"
      >
        <label htmlFor="email" className="block font-medium dark:text-white text-gray-700 mb-2">
          Email Address
        </label>
        <input
          className="w-full p-2 rounded-lg  border-2 dark:border-dark_btn border-purple-300  bg-white dark:bg-black"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="email" className="block font-medium dark:text-white text-gray-700 mt-2 mb-2">
          Message
        </label>
        <textarea
          className="w-full p-2 rounded-lg border-2  dark:border-dark_btn border-purple-300 bg-white dark:bg-black"
          id="message"
          name="message"
          placeholder="Your message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="dark:hover:bg-dark_btn text-white p-2 rounded-lg bg-purple-300 hover:bg-violet-300  dark:bg-violet-300 mt-2"
        >
          Submit
        </button>
      </form>
      </section>
    </div>
  );
}
export default Contact;
