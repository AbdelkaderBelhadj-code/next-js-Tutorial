import Link from "next/link";

export const metadata = {
    title : "Article page"
}
export default function ActiclesPage(){
    return(
        <div>
            <h3>Articles Page</h3>

            <Link href="/posts">
            <button>Take me to the posts page</button>
            </Link>
        </div>

       
    );
}