import React from 'react';
import Link from 'next/link';

interface ContactCTAProps {
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  buttonClassName?: string;
  className?: string;
}

const ContactCTA: React.FC<ContactCTAProps> = ({
  title = "Готові втілити",
  titleHighlight = "ваші ідеї в життя?",
  description = "Зв'яжіться з нами прямо зараз, щоб отримати безкоштовний розрахунок вартості та консультацію від наших фахівців. Працюємо швидко та якісно!",
  buttonText = "Зв'язатися з нами",
  buttonHref = "/contacts",
  buttonClassName = "bg-lime-400 text-black font-bold px-10 py-4 hover:bg-lime-500 hover:scale-105 transition-all uppercase shadow-[0_4px_14px_0_rgba(163,230,53,0.4)]",
  className = "",
}) => {
  return (
    <section
      id="contact"
      className={`py-24 bg-zinc-950 border-t border-zinc-800 relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title} <br />
          <span className="text-lime-400">{titleHighlight}</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={buttonHref}
            className={buttonClassName}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;