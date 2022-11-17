import Link from "next/link";
import ptBr from "date-fns/locale/pt-BR"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

interface BlogPostProps {
  title: string;
  slug: string;
  postCover: string;
  createdAt: Date;
}

export function BlogPost({ title, slug, postCover, createdAt }: BlogPostProps) {
  return (
    <Link href={"/posts/" + slug}>
      <div className="h-80 w-72 bg-white drop-shadow-lg rounded-xl hover:scale-105 transition-transform ">
        <div className="rounded-t-lg">
          <img className="rounded-t-lg" src={postCover} alt="" />
        </div>
        <div className="p-3">
          <time>{formatDistanceToNow(new Date(createdAt), {locale: ptBr, addSuffix: true})}</time>
          <h2 className="text-black text-xl font-bold mt-2">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
