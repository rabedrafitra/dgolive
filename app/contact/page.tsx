'use client';

import { useState } from 'react';
import Wrapper from '../components/Wrapper';
import { Phone, Mail, MapPin, Facebook, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <Wrapper>
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        {/* En-tête avec SVG et fond */}
        <div className="text-center mb-12 bg-primary rounded-lg py-8 shadow-lg">
          {/* SVG Vectoriel (Enveloppe) */}
          <div className="mb-4">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              className="mx-auto text-white transition-transform duration-300 hover:scale-110"
              aria-label="Contact Envelope"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 6 10-6" />
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold text-white">Contactez-Nous</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Rejoignez l’expérience du live shopping ! Contactez notre équipe pour en savoir plus sur nos sessions live et nos solutions de gestion client.
          </p>
        </div>

        {/* Section de contact */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Phone className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-base-content">Téléphone</h3>
              <p className="text-gray-600">+261 34 76 020 77</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Mail className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-base-content">Email</h3>
              <p className="text-gray-600">lordjacyn@gmail.com</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-base-content">Adresse</h3>
              <p className="text-gray-600">Villa Amparihy Bevalala</p>
            </div>
          </div>
        </div>

        {/* Section réseaux sociaux */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-semibold text-center text-base-content mb-6">Suivez-Nous</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100077210915343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/rabedrafitra/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/rabedrafitra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Section SVG interactifs */}
        <div className="bg-gray-100 py-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-base-content mb-8">Pourquoi choisir notre plateforme ?</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* SVG Caméra (Live) */}
            <div
              className="flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredIcon('camera')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredIcon === 'camera' ? 'hsl(330, 100%, 60%)' : '#4B5563'}
                strokeWidth="2"
                className={`transform transition-transform duration-300 ${hoveredIcon === 'camera' ? 'scale-110' : 'scale-100'}`}
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <h3 className="text-lg font-semibold text-base-content mt-4">Live Shopping</h3>
              <p className="text-gray-600 mt-2">
                Organisez des sessions live interactives pour engager vos clients en temps réel.
              </p>
            </div>

            {/* SVG Panier (Shopping) */}
            <div
              className="flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredIcon('cart')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredIcon === 'cart' ? 'hsl(330, 100%, 60%)' : '#4B5563'}
                strokeWidth="2"
                className={`transform transition-transform duration-300 ${hoveredIcon === 'cart' ? 'scale-110' : 'scale-100'}`}
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <h3 className="text-lg font-semibold text-base-content mt-4">Commandes Simplifiées</h3>
              <p className="text-gray-600 mt-2">
                Gérez facilement les commandes de vos clients pendant les sessions live.
              </p>
            </div>

            {/* SVG Graphique (Développement Infos) */}
            <div
              className="flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredIcon('chart')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke={hoveredIcon === 'chart' ? 'hsl(330, 100%, 60%)' : '#4B5563'}
                strokeWidth="2"
                className={`transform transition-transform duration-300 ${hoveredIcon === 'chart' ? 'scale-110' : 'scale-100'}`}
              >
                <path d="M3 3v18h18" />
                <path d="M7 16v-6" />
                <path d="M12 16v-10" />
                <path d="M17 16v-4" />
              </svg>
              <h3 className="text-lg font-semibold text-base-content mt-4">Analyse des Données</h3>
              <p className="text-gray-600 mt-2">
                Suivez les performances de vos sessions et optimisez vos stratégies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}