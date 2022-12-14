import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPlaiceholder } from "plaiceholder";
import { AnimalType } from "../shared/interfaces/petfinder.interface";
import TypeCardsGrid from "../components/TypeCardsGrid";
import { ANIMAL_TYPES } from "../enums";

export interface HomePageProps {
    types: AnimalType[];
}

const {
    NEXT_PUBLIC_PETFINDER_API_URL,
    NEXT_PUBLIC_PETFINDER_CLIENT_ID,
    NEXT_PUBLIC_PETFINDER_CLIENT_SECRET
} = process.env;

export const getStaticProps: GetStaticProps = async () => {
    let types: AnimalType[] = [];

    try {
        const { access_token } = await (
            await fetch (`${NEXT_PUBLIC_PETFINDER_API_URL}/oauth2/token`, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    grant_type: "client_credentials",
                    client_id: NEXT_PUBLIC_PETFINDER_CLIENT_ID,
                    client_secret: NEXT_PUBLIC_PETFINDER_CLIENT_SECRET
                }),
            })
        ).json();

        ({ types } = await (
            await fetch (`${NEXT_PUBLIC_PETFINDER_API_URL}/types`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`
                },
            })
        ).json());

        if (types.length > 0) {
            types = await Promise.all(
                types.map(async (type) => {
                    const {blurhash, img} = await getPlaiceholder(
                        ANIMAL_TYPES[type.name].image.url
                    );

                    return {
                        ...type,
                        id: (type._links.self.href.match(/\/types\/([\w-]+)$/) || "")[1],
                        blurhash,
                        img: {
                            ...img,
                            objectPosition: 
                                ANIMAL_TYPES[type.name].image.styles?.objectPosition || "center",
                        }
                    };
                })
            );
        }
    } catch (err) {
        console.error(err);
    }

    return {
        props: {
            types: types,
        },
    };
}

const HomePage: NextPage<HomePageProps> = ({ types = [] }) => (
    <>
        <Head>
            <title>Next Petfinder</title>
        </Head>
        <section>
            <h1 className="text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400 sm:text-8xl lg:text-9xl">
                Next Petfinder
            </h1>
            <p className="mt-7 mb-7 text-2xl text-gray-400">
                Explore the Next Pets and help them find a good home.
            </p>
            {types.length > 0 && <TypeCardsGrid types={types} />}
        </section>
    </>
);

export default HomePage;