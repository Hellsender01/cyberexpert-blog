
"use client"
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VideoCard } from "@/components/videocard";
import { useEffect, useState } from "react";
import firebase from "@/firebaseConfig";

interface Video {
  title: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
}

export default function IndexPage() {
  const [latestVideos, setLatestVideos] = useState<Video[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const db = firebase.firestore();
      try {
        const videoList: Video[] = [];
        const querySnapshot = await db.collection("videos").limit(3).get();

        querySnapshot.forEach((doc) => {
          const { videos } = doc.data();
          videoList.push(videos[0] as any);
        });

        setLatestVideos(videoList);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="md:container grid items-center gap-6 pb-8 pt-6 md:py-10 max-h-screen">
      <div className="flex max-w-full flex-col items-center justify-center gap-2 py-14">
        <h1 className="text-3xl font-bold uppercase leading-tight tracking-tighter text-center md:text-4xl">
          The Cyber Expert
        </h1>

        <div className="w-[80%] md:w-[50%] py-4 items-center">
          <Input
            search={true}
            type="text"
            className="md:h-[60px] dark:bg-gray-700 ring-white dark:hover:bg-gray-700 transition-colors rounded-md focus-visible:outline-none "
          />
          {/* <Button variant="default" size="lg">Search</Button> */}
        </div>
      </div>

      <div className="mx-10">
        {/* <h1 className="text-3xl font-semibold uppercase leading-tight tracking-tighter text-center md:text-start md:text-4xl py-6">
          Latest Videos
        </h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestVideos.map((video) => (
            <VideoCard
              key={video.title}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail_url}
              youtube={video.video_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
