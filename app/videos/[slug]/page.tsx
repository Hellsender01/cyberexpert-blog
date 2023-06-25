"use client"

import { useEffect, useState } from "react";
import firebase from "@/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { Input } from "@/components/ui/input";
import { VideoCard } from "@/components/videocard";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
  const [searchDisplay, setSearchDisplay] = useState<boolean>(false);
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
  const currentItems = filteredVideoData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchIconClick = () => {
    setSearchDisplay(true);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCloseButtonClick = () => {
    setSearch("");
    setSearchDisplay(false);
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-y-4 pb-10">
        <h1 className="dark:text-white md:text-3xl">{title}</h1>
        <div className="ml-auto">
          <div className="md:hidden">
            {!searchDisplay && (
              <Button  variant={"ghost"} className="mx-2 flex" onClick={handleSearchIconClick}>
                <Icons.search />
              </Button>
            )}

            {searchDisplay && (
              <div className="relative">
                <Input
                  className="w-full pl-10 shadow-md"
                  search={false}
                  placeholder="Search"
                  value={search}
                  onChange={handleSearchInputChange}
                />
                <Button
                variant={"ghost"}
                  className="absolute right-0 top-0 flex h-full items-center justify-center"
                  onClick={handleCloseButtonClick}
                >
                  <Icons.close />
                </Button>
              </div>
            )}
          </div>
          <div className="hidden md:block">
            <Input
              className="w-full shadow-md"
              search={true}
              placeholder="Search"
              value={search}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <div className="flex flex-col items-start space-y-4">
              <Skeleton className="h-20 w-[400px]" />
              <Skeleton className="h-12 w-[400px]" />
              <Skeleton className="h-12 w-[400px]" />
            </div>
          ))) : (
          currentItems?.map((video, i) => (
            <VideoCard
              key={i}
              title={video.title}
              youtube={video.video_url}
              thumbnail={video.thumbnail_url}
              description={video.description} 
              completeBtn={true}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      {filteredVideoData.length > itemsPerPage && (
        <div className="my-4 flex justify-center">
          <ul className="flex space-x-2">
            {currentPage > 1 && (
              <li
                className={`rounded bg-primary px-4 py-1 text-primary-foreground `}
                onClick={() => paginate(currentPage - 1)}
              >
                <Icons.moveLeft />
              </li>
            )}

            <li
              className={`rounded bg-primary px-4 py-1 text-primary-foreground `}
              onClick={() => paginate(currentPage)}
            >
              {currentPage}
            </li>

            {currentPage < Math.ceil(filteredVideoData.length / itemsPerPage) && (
              <li
                className={`rounded bg-primary px-4 py-1 text-primary-foreground `}
                onClick={() => paginate(currentPage + 1)}
              >
                <Icons.moveRight />
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
