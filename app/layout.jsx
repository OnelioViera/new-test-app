import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Main Layout',
  description: 'Main layout for the app',
  keywords: 'layout, main layout, app layout',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};

export default MainLayout;
