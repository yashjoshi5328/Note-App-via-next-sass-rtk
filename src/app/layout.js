import { ProvideStore } from './redux/provider';
import './styles/globals.scss';

export const metadata = {
  title: "CRUD Next App",
  description: "CRUD APP via NEXT , SASS AND REDUXToolKIT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" 
      />
      </head>
      <body>
        <header>
          CRUD APP
        </header>
        <ProvideStore>
          {children}
        </ProvideStore>
      </body>
    </html>
  );
}
