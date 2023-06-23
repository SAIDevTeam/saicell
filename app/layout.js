

import "styles/globals.scss"
import { Inter } from 'next/font/google'
import Provider from "@/components/Provider";
import Nav from "@/components/Nav";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NIT DGP FREELANCE',
  description: 'GET',
}

const RootLayout = ({ children ,opacity}) => (
  <html lang='en'>
    <body className={inter.className } style={{"opacity":`${opacity}`}}>
      
      <Provider>
        
     
       
         <Nav/>
          {children}
      </Provider>
    </body>
  </html>
);

export default RootLayout;