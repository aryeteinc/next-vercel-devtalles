import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";

const Contact = () => {
    return (
        <MainLayout>
            <h1>Contact</h1>
                <Link className={"title"} href="/">Ir a Home</Link>
                <p className={"description"}>
                    <code className={"code"}>pages/contact/contact.jsx</code>
                </p>
        </MainLayout>
    );
}

export default Contact;