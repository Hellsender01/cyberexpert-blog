interface VideosListProps {
    slug: string;
}

export default function VideosListPage({params: {slug: String}}: VideosListProps) {
    return (
        <div>
            <h1 className="text-3xl text-white">{slug}</h1>
        </div>
    );
}
