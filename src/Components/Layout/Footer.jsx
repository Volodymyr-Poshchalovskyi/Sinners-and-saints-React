import React from 'react';
import sinnersLogo from '../../assets/Logo/Sinners logo white.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// --- 1. ЗМІНЕНО СТРУКТУРУ ДАНИХ ---
// Повертаємось до 4-колонної структури, щоб правильно згрупувати секції.
const footerColumns = [
  {
    title: 'DIRECTORS',
    links: Array(10).fill('Jessy Terrero'),
  },
  {
    title: 'ON ASSIGNMENT',
    links: Array(6).fill('Jessy Terrero'),
  },
  {
    title: 'STUDIO LUX',
    subSections: [
      {
        title: 'TABLE TOP DIVISION',
        links: Array(5).fill('Jessy Terrero'),
      },
      {
        title: 'POST',
        links: Array(5).fill('Jessy Terrero'),
      },
    ],
  },
  {
    title: 'ORIGINALS',
    subSections: [
      { title: 'PRODUCTION SERVICES', links: [] },
      { title: 'MANAGEMENT', links: [] },
      { title: 'FEATURE FILM PACKAGING', links: [] },
      { title: 'TEAM', links: [] },
    ],
  },
];

const FooterLink = ({ children }) => (
  <li>
    <a href="#" className="font-light text-sm text-gray-400 hover:text-white transition-colors">
      {children}
    </a>
  </li>
);

// Універсальний компонент для рендеру секцій
const ColumnSection = ({ title, links }) => (
  <div className="mb-8">
    <h3 className="text-xs font-bold uppercase tracking-widest mb-6">{title}</h3>
    <ul className="space-y-3 list-none p-0 m-0">
      {links?.map((link, index) => (
        <FooterLink key={index}>{link}</FooterLink>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans h-[90vh]">
      <div className="max-w-screen-2xl mx-auto px-16 h-full flex flex-col">
        
        {/* Верхня частина з логотипом */}
        <div className="flex justify-center pt-12 pb-8">
          <img src={sinnersLogo} alt="Sinners Logo" className="h-10 w-auto" />
        </div>

        {/* --- 2. ЗМІНЕНО СІТКУ --- */}
        {/* Повертаємо 4 колонки і збільшуємо відстань між ними до gap-x-16 */}
        <div className="my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16">
          {footerColumns.map((col, index) => (
            <div key={index}>
              {/* Рендеримо головну секцію, якщо вона є */}
              {col.title && <ColumnSection title={col.title} links={col.links} />}
              
              {/* Рендеримо під-секції, якщо вони є */}
              {col.subSections?.map((sub, subIndex) => (
                <ColumnSection key={subIndex} title={sub.title} links={sub.links} />
              ))}
            </div>
          ))}
        </div>
        
        {/* Нижня частина з копірайтом */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">

            {/* --- 3. НИЖНІЙ ЛОГОТИП ВИДАЛЕНО --- */}
            
            <div className="flex items-center gap-5 text-lg">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300"><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="text-gray-500 text-xs uppercase tracking-wider text-center md:text-right">
            <span>© 2025 SINNERS AND SAINTS LLC. ALL RIGHTS RESERVED.</span>
            <a href="#" className="ml-6 hover:text-gray-300">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}