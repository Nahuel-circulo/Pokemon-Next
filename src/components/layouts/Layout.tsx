import { FC, PropsWithChildren } from "react";
import Head from "next/head";

interface Props extends PropsWithChildren {
    title?: string;
}
export const Layout: FC<Props> = ({ title, children }) => {
    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="
        author" content="Nahuel Pedroso" />
                <meta name="description" content={`Informacion sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            </Head>

            {/* Navbar */}

            <main>
                {children}
            </main>
        </>
    );
}


