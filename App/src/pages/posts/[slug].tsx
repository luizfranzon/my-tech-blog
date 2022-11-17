import { GraphQLClient, gql } from "graphql-request";
import { postsProps } from "..";
import { Header } from "../../components/Header";

const graphcms = new GraphQLClient(
  "https://api-sa-east-1.hygraph.com/v2/clal6kvhh1n3c01ujdzqgb6ac/master"
);

const query = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      createdAt
      content {
        html
      }
    }
  }
`;

interface screenPostProps {
  post: {
    id: string;
    title: string;
    createdAt: string;
    content: {
      html: string
    }
  };
}

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

interface postProps {
  slug: string;
}

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);
  return {
    paths: posts.map((post: postProps) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(query, { slug });
  const post = data.post;
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export default function BlogPost({ post }: screenPostProps) {
  return (
    <>
      <Header />
      <section className="mb-72 mt-16 flex flex-col w-full max-w-3xl items-center m-auto">
        <h1 className="font-bold text-4xl">{post.title}</h1>
        <div className="mt-16" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
      </section>
    </>
  );
}
