"use client"
import { useEffect, useState } from "react";
import firebase from "@/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { Input } from "@/components/ui/input";
import { VideoCard } from "@/components/videocard";
import { Skeleton } from "@/components/ui/skeleton";

interface Video {
  title: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
}

interface VideosListProps {
  params: {
    slug: string;
  };
}

export default function VideosListPage({ params }: VideosListProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [videoData, setVideoData] = useState<Video[]>([]);
  const [filteredVideoData, setFilteredVideoData] = useState<Video[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 6;

  const fetchVideosByCategory = async (category: string) => {
    const db = firebase.firestore();
    try {
      const querySnapshot = await db
        .collection("videos")
        .where("title", "==", category)
        .get();

      const videoList: Video[] = [];
      querySnapshot.forEach((doc) => {
        const { videos } = doc.data();
        videos.map((Ytvideo: Video) => videoList.push(Ytvideo as Video));
      });

      return videoList;
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  };

  const { slug } = params;

  useEffect(() => {
    setLoading(true);
    const fetchVideos = async () => {
      let categoryTitle = decodeURIComponent(slug);
      setTitle(categoryTitle);
      const videos = await fetchVideosByCategory(categoryTitle);
      setVideoData(videos);
      setLoading(false);
    };

    fetchVideos();
  }, [slug]);

  useEffect(() => {
    const filterVideos = () => {
      const filteredVideos = videoData.filter((video) => {
        if (typeof video.title === "string") {
          return video.title.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      });
      setFilteredVideoData(filteredVideos);
    };

    filterVideos();
  }, [search, videoData]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVideoData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-y-4 pb-10">
        <h1 className="md:text-3xl dark:text-white">{title}</h1>
        <div className="ml-auto">
          <Input
            className="shadow-md"
            search={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="flex flex-col items-start space-y-4">
            <Skeleton className="h-12 w-[250px]" />
            <Skeleton className="h-6 w-[250px]" />
            <Skeleton className="h-6 w-[200px]" />
          </div>
        ) : (
          currentItems.map((video, i) => (
            <VideoCard
              key={i}
              title={video.title}
              youtube={video.video_url}
              thumbnail={video.thumbnail_url}
              description={video.description}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        {filteredVideoData.length > itemsPerPage && (
          <ul className="flex space-x-2">
            {Array.from({ length: Math.ceil(filteredVideoData.length / itemsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  className={`px-4 py-1 rounded bg-primary text-primary-foreground hover:bg-primary/90 ${
                    index + 1 === currentPage ? "bg-transparent text-slate-100 border-2 border-white" : "bg-gray-300"
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
