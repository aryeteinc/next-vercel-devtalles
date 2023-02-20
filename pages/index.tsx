
import Link from "next/link";
import { MainLayout } from '../components/layouts/MainLayout';

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (    
      <MainLayout>
        <h1>Home</h1>
          <Link href="/about" className={"title"}>Ir a About</Link>
          <p className={"description"}>
              <code className={"code"}>pages/index.jsx</code>
          </p>
      </MainLayout>   
  )
}
