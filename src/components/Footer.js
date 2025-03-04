import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Contenu du footer */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Section 1 : Logo de l'ENSAF */}
                    <div className="flex flex-col items-center md:items-start">
                        <img
                            src="/images/ensaf-logo.png"
                            alt="Logo ENSAF"
                            className="h-24 w-24 rounded-full  mb-4"
                        />
                        <p className="text-sm text-gray-400">
                            École Nationale des Sciences Appliquées de Fès
                        </p>
                    </div>

                    {/* Section 2 : Liens utiles */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white">
                                    À propos
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-400 hover:text-white">
                                    Politique de confidentialité
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 : Coordonnées */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold mb-4">Coordonnées</h3>
                        <p className="text-gray-400">ENSA Fès</p>
                        <p className="text-gray-400">Route d'Imouzzer, Fès, Maroc</p>
                        <p className="text-gray-400">Tél: +212 5 35 60 05 00</p>
                        <p className="text-gray-400">Email: contact@ensaf.ac.ma</p>
                    </div>
                </div>

                {/* Section 4 : Réseaux sociaux */}
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-linkedin text-2xl"></i>
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-youtube text-2xl"></i>
                        </a>
                    </div>
                </div>

                {/* Section 5 : Droits d'auteur */}
                <div className="mt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} ENSA Fès. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;