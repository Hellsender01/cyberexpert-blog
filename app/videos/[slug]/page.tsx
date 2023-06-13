interface VideosListProps {
    params: {
        slug: string;
    };
}

export default function VideosListPage({params}: VideosListProps) {
    return (
        <div>
            <h1 className="text-3xl text-white">{params.slug}</h1>
        </div>
    );
}
