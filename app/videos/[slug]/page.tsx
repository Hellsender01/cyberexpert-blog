"use client"

import { useEffect, useState } from "react"
import { YoutubeVideos, webExploitation } from "@/data/web-exploitation"
import firebase from "@/firebaseConfig"
import { useCollection } from "react-firebase-hooks/firestore"

import { Input } from "@/components/ui/input"
import { VideoCard } from "@/components/videocard"

interface VideosListProps {
  params: {
    slug: string
  }
}

export default async function VideosListPage({ params }: VideosListProps) {
  const [title, setTitle] = useState<string | null>(null)
  const [search, setSearch] = useState<string>("")
  const [videoData, setVideoData] = useState<
    {
      title: string
      youtube: string
    }[]
  >([])

  const fetchVideosByCategory = async (category: string) => {
    const db = firebase.firestore()
    try {
      // Specify the collection and query based on the category field
      const querySnapshot = await db
        .collection("videos")
        .where("category", "==", category)
        .get()

      // Retrieve the list of documents matching the category
      const videos: any[] = []
      querySnapshot.forEach((doc) => {
        console.log("doc: ", doc)
        videos.push(doc.data())
      })

      console.log("Videos fetched from Firestore:", videos)
      return videos
    } catch (error) {
      console.error("Error fetching videos:", error)
      return []
    }
  }

  const { slug } = params


  useEffect(() => {
    const fetchVideos = async () => {
      if (slug === "web-exploitation") {
        setTitle("Web Exploitation");
        const videos = await fetchVideosByCategory("web-exploitation");
        setVideoData(videos);
      } else if (slug === "binary-exploitation") {
        setTitle("Binary Exploitation");
        const videos = await fetchVideosByCategory("binary-exploitation");
        setVideoData(videos);
      } else if (slug === "network-forensics") {
        setTitle("Network Forensics");
        const videos = await fetchVideosByCategory("network-forensics");
        setVideoData(videos);
      } else {
        setTitle(null);
        setVideoData([]);
      }
    };

    fetchVideos();
  }, [slug]);



  function extractYouTubeVideoId(url: string) {
    const videoIdRegex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/|youtube\.com\/(?:v\/|embed\/|watch\?v=))([\w-]{11})(?:\S+)?$/
    const match = url.match(videoIdRegex)
    if (match && match[1]) {
      return match[1]
    } else {
      return null
    }
  }

  const GetAvatar = async (link: string): Promise<string | null> => {
    const videoId = extractYouTubeVideoId(link)
    try {
      const avatarImgResponse = await fetch(
        `https://img.youtube.com/vi/${videoId}/0.jpg`
      )
      if (avatarImgResponse.ok) {
        return avatarImgResponse.url
      } else {
        console.error(
          `Failed to fetch avatar image: ${avatarImgResponse.status} ${avatarImgResponse.statusText}`
        )
        return null
      }
    } catch (error) {
      console.error("Failed to fetch avatar image:", error)
      return null
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center space-y-4 pb-10">
        <h1 className="text-3xl text-white">{title}</h1>
        <div className="ml-auto">
          <Input
            search={true}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full gap-4">
        {videoData.map((video, i) => {
          // console.log("video: ", video)
          return (
            <VideoCard key={i} title={video.title} youtube={video.youtube} />
          )
        })}
      </div>
    </div>
  )
}
