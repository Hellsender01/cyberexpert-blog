interface VideosListProps {
    slug: string;
}

export default function VideosListPage(props: VideosListProps) {
    return (
        <div>
            <h1 className="text-3xl text-white">{props.slug}</h1>
        </div>
    );
}``