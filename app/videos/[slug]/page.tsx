"use client"

import { useEffect, useState } from "react";
import firebase from "@/firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { Input } from "@/components/ui/input";
import { VideoCard } from "@/components/videocard";
import { Skeleton } from "@/components/ui/skeleton"

interface Video {
  title: string;
  link: string;
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

  const fetchVideosByCategory = async (category: string) => {
    const db = firebase.firestore();
    try {
      const querySnapshot = await db
        .collection("videos")
        .where("category", "==", category)
        .get();

      const videos: Video[] = [];
      querySnapshot.forEach((doc) => {
        videos.push(doc.data() as Video);
      });

      return videos;
    } catch (error) {
      console.error("Error fetching videos:", error);
      return [];
    }
  };

  const { slug } = params;

  useEffect(() => {
    setLoading(true)
    const fetchVideos = async () => {
      let categoryTitle = null;
      let categoryValue = "";

      if (slug === "web-exploitation") {
        categoryTitle = "Web Exploitation";
        categoryValue = "web-exploitation";
      } else if (slug === "binary-exploitation") {
        categoryTitle = "Binary Exploitation";
        categoryValue = "binary-exploitation";
      } else if (slug === "network-forensics") {
        categoryTitle = "Network Forensics";
        categoryValue = "network-forensics";
      }

      setTitle(categoryTitle);
      const videos = await fetchVideosByCategory(categoryValue);
      setVideoData(videos);
      setLoading(false)
    };

    fetchVideos();
  }, [slug]);

  useEffect(() => {
    const filterVideos = () => {
      const filteredVideos = videoData.filter((video) =>
        video.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredVideoData(filteredVideos);
    };

    filterVideos();
  }, [search, videoData]);

  return (
    <div className="w-full">
      <div className="flex items-center space-y-4 pb-10">
        <h1 className="md:text-3xl dark:text-white ">{title}</h1>
        <div className="ml-auto">
          <Input
            className="shadow-md"
            search={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4">
        {
          loading ?
            <div className="flex flex-col items-start space-y-4">
              <Skeleton className="h-12 w-[250px]" />
              <Skeleton className="h-6 w-[250px]" />
              <Skeleton className="h-6 w-[200px]" />
            </div>
            :
            filteredVideoData.map((video, i) => (
              <VideoCard key={i} title={video.title} youtube={video.link} />
            ))}
      </div>
    </div>
  );
}
