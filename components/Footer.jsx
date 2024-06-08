const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-auto py-6 bg-gray-300">
      <p className="text-center justify-center">&copy; {currentYear} Next Footer</p>
    </div>
  )
};

export default Footer;
