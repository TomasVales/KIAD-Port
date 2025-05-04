import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useLanguage } from "../../context/LanguageContext";
import emailjs from '@emailjs/browser';


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.target,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(() => {
                toast.success(t('successMessage'));
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() =>
                toast.error(t('errorMessage'))
            );
    };
    const { t } = useLanguage();

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-950 to-black"
        >
            <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl px-6 md:px-20">
                <div className="flex-1 flex items-center justify-center md:justify-start text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start justify-start">
                        <h2 className="text-white text-3xl md:text-4xl font-bold">
                            {t('contactUs')}
                        </h2>
                        <p className="text-white/70 mt-4 text-[14px] md:text-lg max-w-md">
                            {t('completeTheForm')}
                        </p>
                        <p className="text-white/70 mt-4 text-[14px] md:text-lg max-w-md">
                            Email: <a href="mailto:info@kiad.dev" target='_blank' className="hover:underline">info@kiad.dev</a>
                        </p>
                        <p className="text-white/70 mt-4 text-[14px] md:text-lg max-w-md">
                            Tel: <a href="https://api.whatsapp.com/send?phone=5491151455042" target='_blank' className="hover:underline">+54 9 11 5145-5042</a>
                        </p>
                    </div>
                </div>

                <div className="flex-1 border-white/[0.2] border rounded-2xl p-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-slate-700 focus:bg-blue-500/5"
                                placeholder={t('name')}
                                onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-slate-700 focus:bg-blue-500/5"
                                placeholder={t('example')}
                                onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                }
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-slate-700 focus:bg-blue-500/5 resize-none"
                                placeholder={t('message')}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-3 px-6 rounded-full transition relative overflow-hidden hover:bg-gray-300 hover:scale-100 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
                        >
                            {t('send')}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            />
        </section>
    );
};

export default Contact