import { useForm, ValidationError } from "@formspree/react";

function Contact({theme}) {
  const [state, handleSubmit] = useForm("mjvdvjej");
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }
  return (
    //     <div id="about">
    //   <div className="bg-white dark:bg-gray-800">
    //     <div className=" md:h-28 h-20 bg-white dark:bg-gray-800">
    //       <h1 className=" text-2xl md:text-4xl font-bold py-20 text-center md:text-left p-14 animate-pulse">
    //         Get in touch
    //       </h1>
    //     </div>
    //   <form
    //     onSubmit={handleSubmit}
    //     method="POST"
    //     action="https://formspree.io/f/mjvdvjej"
    //   >
    //     <label htmlFor="email">Email Address</label>
    //     <input className="input" id="email" type="email" name="email" />
    //     <ValidationError prefix="Email" field="email" errors={state.errors} />
    //     <br />
    //     <label htmlFor="email">Message</label>
    //     <textarea className="input" id="message" name="message" />
    //     <ValidationError
    //       prefix="Message"
    //       field="message"
    //       errors={state.errors}
    //     />
    //     <button type="submit" disabled={state.submitting}>
    //       Submit
    //     </button>
    //   </form>
    // </div>
    // </div>
    <div id="about" class="bg-white dark:bg-gray-800">
      <div class="md:h-28 mb-16 h-20 bg-white dark:bg-gray-800">
        <h1 class="text-2xl md:text-4xl font-bold py-20 text-center md:text-left p-14 animate-pulse">
          Get in touch
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mjvdvjej"
        class="bg-white p-6 rounded-lg shadow-md"
      >
        <label htmlFor="email" class="block font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          class="w-full p-2 rounded-lg  border-2 border-violet-300"
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="email" class="block font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          class="w-full p-2 rounded-lg border-2 border-violet-300"
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
          className="hover:bg-violet-200 text-white p-2 rounded-lg bg-violet-300 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
