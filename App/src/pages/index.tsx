import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import { BlogPost } from "../components/BlogPost";
import { Header } from "../components/Header";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clal6kvhh1n3c01ujdzqgb6ac/master"
);

const query = gql`
  {
    posts {
      id
      title
      slug
      createdAt
      content {
        html
      }
      postCover {
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(query);
  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}

export interface postsProps {
  posts: [
    {
      id: string;
      title: string;
      slug: string;
      createdAt: string;
      content: {
        html: string;
      };
      postCover: {
        url: string;
      };
    }
  ];
}

export default function Home({ posts }: postsProps) {
  return (
    <>
      <Header />
      <section className="flex flex-col gap-5 items-center justify-center h-[480px] bg-mainBackground bg-cover bg-no-repeat w-full">
        <h1 className="text-white text-4xl lg:text-6xl font-bold">MyTech</h1>
        <div className="flex items-center flex-col px-3 text-center">
          <span className="text-white font-semibold text-lg lg:text-2xl">
            Se conecte com <span className="font-black">milhares de devs</span> e se mantenha atualizado
          </span>
          <span className="text-white font-semibold text-lg lg:text-2xl">
            sobre as principais noticias sobre o mercado de tecnologia.
          </span>
        </div>
        <Link
          href="/newsletter"
          className="font-bold text-lg py-2 px-12 rounded bg-white shadow-xl hover:scale-110 transition-transform"
        >
          Inscreva-se
        </Link>
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center mt-11 gap-5 pb-8">
        {posts.length > 0 ? posts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            slug={post.slug}
            postCover={post.postCover.url}
            createdAt={new Date(post.createdAt)}
          />
        )) 
        : 
        <>
          <span className="font-bold">Nenhum post encontrado :(</span>
        </>}
      </section>
    </>
  );
}
