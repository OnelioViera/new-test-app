import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Main Layout',
  description: 'Main layout for the app',
  keywords: 'layout, main layout, app layout',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
};

export default MainLayout;
