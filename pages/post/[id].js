import Link from "next/link";

export default function Post({ post }) {
    return (
        <div>
            <Link href='/'><a>Go home</a></Link>
            <div>{post.attributes.title}</div>
        </div>
    );
}

export async function getStaticPaths() {
    const resp = await fetch('http://localhost:1337/api/posts');
    const posts = await resp.json();
    // console.log(posts);

    const paths = posts.data.map((post) => ({
        params: { id: String(post.id) }
    }));
    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { id } = params;
    console.log(id);
    const resp = await fetch(`http://localhost:1337/api/posts/${id}`);
    // console.log(`http://localhost:1337/api/posts/${id}`);
    const data = await resp.json();
    const post = data.data;
    console.log(post);

    return {
        props: { post }
    }
}