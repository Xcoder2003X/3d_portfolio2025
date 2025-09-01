//Importe la bibliothèque emailjs (version browser) qui permet d’envoyer des emails depuis le client
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
//Importe un custom hook useAlert
import useAlert from '../hooks/useAlert.js';
//Importe le composant Alert qui servira à afficher un message visuel (succès / erreur).
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  /**alert : objet d’état (ex. { show, text, type }),
   showAlert : fonction pour afficher une alerte,
   hideAlert : fonction pour la cacher */

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  //État form qui contient les valeurs contrôlées des champs du formulaire :
  //  name, email, message. Initialement vides.
  const [form, setForm] = useState({ name: '', email: '', message: '' });


  //handleChange est la fonction appelée à chaque onChange d’un champ
  //met à jour la propriété correspondant au name du champ (ex. name='email') 
  // en gardant le reste du formulaire inchangé
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

// service_jm6ggac
//template_3tpc2kq
//b2zUmsbi6UYw1-0Ra
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

  //Appel à emailjs.send(serviceID, templateID, templateParams, publicKey)

     emailjs
  .send(
    "service_jm6ggac", // Service ID (string)
    "template_3tpc2kq", // Template ID (string)
    { // Template parameters (object)
      from_name: form.name,
      to_name: "Ayoub Boss",
      from_email: form.email,
      to_email: "ayoub.aitchikh23@ump.ac.ma",
      message: form.message,
    },
    "UDrUnRAvaYOrj7fnP" // Public Key (string) - 4th argument
  )
  .then(
    () => {
      setLoading(false);
      showAlert({
        show: true,
        text: "Thank you for your message 😃",
        type: "success",
      });

      setTimeout(() => {
        hideAlert(false);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      }, 3000); // Fixed timeout value (should be number, not array)
    },
    (error) => {
      setLoading(false);
      console.error(error);
      showAlert({
        show: true,
        text: "I didn't receive your message 😢",
        type: "danger",
      });
    }
  );
}

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen form-backg" />

        <div className="contact-container form-backg ">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-md text-white-600 mt-2">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-7">
            <label className="space-y-1">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-1">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={2}
                className="field-input"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;