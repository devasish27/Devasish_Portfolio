import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzznlvqr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* FORM */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3>Send a Message</h3>

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className={styles.success}>Message sent successfully ✅</p>
        )}

        {status === "error" && (
          <p className={styles.error}>Something went wrong ❌</p>
        )}
      </form>

      {/* CONTACT INFO */}
      <div className={styles.info}>
        <h3>Contact Details</h3>

        <p><FiPhone /> +91 8919474533</p>
        <p><FiMail /> devasishsai2004@email.com</p>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/devasish-sai-083aaa26a" target="_blank"> <FaLinkedin /> </a>
          <a href="https://github.com/devasish27" target="_blank"> <FaGithub /> </a>
        </div>
      </div>
    </div>
  );
}