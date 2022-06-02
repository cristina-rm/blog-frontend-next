import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="p-10">
            <Link href='/'><a className="text-green-700 underline italic mb-6">Go home</a></Link>
            {/*<div className="text-green-500 font-bold text-2xl">{post.attributes.title}</div>*/}
            <div className="text-green-500 font-bold text-2xl">post.attributes.title</div>
        </div>
    );
}

/*
export async function getStaticPaths() {
    const url = process.env.API_ENDPOINT;
    const resp = await fetch('http://localhost:1337/api/posts?populate=*');
    const posts = await resp.json();
    // console.log(posts);

    const paths = posts.data.map((post) => ({
        params: { id: post.id.toString() }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const url = process.env.API_ENDPOINT;
    const resp = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*`);
    // const resp = await fetch(`http://localhost:1337/api/posts/${id}`);

    const post = await resp.json();

    return {
        props: { post: post.data },
        revalidate: 1
    }
}*/
