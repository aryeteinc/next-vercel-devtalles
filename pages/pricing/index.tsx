import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";


export default function Pricing(){
    return(
        <MainLayout>
            <h1>Pricing</h1>
            <Link  href="/">Ir a Home</Link>
            <p className={"description"}>
                <code className={"code"}>pages/pricing/pricing.jsx</code>
            </p>                      
        </MainLayout>
    );
}