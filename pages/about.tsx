
import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";


export default function About(){
    return (
        <>
            <h1>About</h1>
            <Link  href="/">Ir a Home</Link>
            <p className={"description"}>
                <code className={"code"}>pages/about.jsx</code>
            </p>                      
        </>
    );
}
About.getLayout = function getLayout(page: JSX.Element){
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    );
}

