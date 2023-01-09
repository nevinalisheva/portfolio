import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mjvdvjej");
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }
  return (
    <div>
        <h1>Get in Touch</h1>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://formspree.io/f/mjvdvjej"
      >
        <label htmlFor="email">Email Address</label>
        <input className="input" id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <label htmlFor="email">Message</label>
        <textarea className="input" id="message" name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Contact;
