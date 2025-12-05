import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm('service_ra6g2qh', 'template_83jeqvl', form.current, 'Z5t8xpJmng6R4tKno')
      .then(() => {
        setStatus('success');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <div className="max-w-2xl mx-auto bg-card/40 border border-white/5 rounded-3xl p-8 md:p-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Let's Build Something</h2>
        <p className="text-slate-400 mt-2 text-sm">Have a DevOps challenge? I'm ready to deploy.</p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" required className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none" placeholder="Name" />
          <input type="email" name="email" required className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none" placeholder="Email" />
        </div>
        <textarea name="message" rows="4" required className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none" placeholder="Message..." />
        
        <button type="submit" disabled={status === 'sending'} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2">
          {status === 'sending' ? 'Sending...' : <>Send Message <Send size={18} /></>}
        </button>

        {status === 'success' && <p className="text-green-400 text-center text-sm flex items-center justify-center gap-2"><CheckCircle size={16}/> Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-400 text-center text-sm flex items-center justify-center gap-2"><AlertCircle size={16}/> Failed to send. Please try again.</p>}
      </form>
    </div>
  );
};
export default Contact;
