  import React, { useRef, useState } from "react";
  import { motion } from "framer-motion";
  import emailjs from "@emailjs/browser";

  import { styles } from "../styles";
  import { EarthCanvas } from "./canvas";
  import { SectionWrapper } from "../hoc";
  import { slideIn } from "../utils/motion";
  import GitHubCalendar from "react-github-calendar";

  const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      const { target } = e;
      const { name, value } = target;

      setForm({
        ...form,
        [name]: value,
      });
    };

    const selectLastHalfYear = contributions => {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const shownMonths = 13
    
      return contributions.filter(activity => {
        const date = new Date(activity.date);
        const monthOfDay = date.getMonth();
    
        return (
          date.getFullYear() === currentYear &&
          monthOfDay > currentMonth - shownMonths &&
          monthOfDay <= currentMonth
        );
      });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .send(
          'service_63r85f9',
          "template_8x0cciz",
          {
            name: form.name,
            to_name: "Simon Ferns",
            email: form.email,
            to_email: "s.f.businessacc@gmail.com",
            message: form.message,
          },
          "CaJOJpsMV7iuCquNE"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",

              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);

            alert("Ahh, something went wrong. Please try again.");
          }
        );
    };

    return (
      <div
        className={`xl:mt-12 grid xl:flex-row flex-col-reverse gap-10 overflow-hidden justify-center `}
      >

  <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='flex-[0.25]'>
      <GitHubCalendar username="AdonisCodes"
      labels={{
        totalCount: `{{count}} contributions in the last year`,
      }}
      theme={{
        dark: ['#1f1f1f', 'red']
      }}
      />
      </motion.div>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black p-8 rounded-2xl'
          style={{border: '1px solid white'}}
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className='bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-gray-900 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-gray-900 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

      </div>
    );
  };

  export default SectionWrapper(Contact, "contact");
