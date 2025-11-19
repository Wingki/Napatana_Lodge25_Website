import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Napatana Lodge</h3>
            <p className="text-white/70">Alotau, Milne Bay Province<br />Papua New Guinea</p>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <ul className="text-white/70 space-y-2">
              <li><a href="mailto:reservations@napatanalodge.com" className="hover:text-secondary">reservations@napatanalodge.com</a></li>
              <li><a href="tel:+6751234567" className="hover:text-secondary">+675 123 4567</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white/70 hover:text-secondary">Facebook</a>
              <a href="#" className="text-white/70 hover:text-secondary">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-light text-center text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Napatana Lodge. All Rights Reserved. Website crafted with ❤️. <a href="#admin" className="opacity-50 hover:opacity-100">Admin</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
