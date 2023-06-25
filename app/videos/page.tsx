"use client"
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import CategoryCard from "@/components/categorycard";
import firebase from "@/firebaseConfig";
import { Skeleton } from "@/components/ui/skeleton";

const VideoPage = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true);
        const fetchCategories = async () => {
            const db = firebase.firestore();
            try {
                const categoryList: string[] = [];
                const querySnapshot = await db.collection('videos').get();
                querySnapshot.forEach((doc) => {
                    // Access the document data
                    const { title } = doc.data();
                    categoryList.push(title);
                });
                setCategories(categoryList);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCategories = categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full">
            <div className="flex items-center py-2 pb-10">
                <h1 className="items-start text-2xl font-bold tracking-tighter">Categories</h1>

                <div className="ml-auto">
                    <Input search={true} value={searchQuery} onChange={handleSearch} type="text" placeholder="Search..." className="hidden w-full rounded-md transition-colors placeholder:text-center focus-visible:outline-none focus-visible:ring-2 dark:bg-transparent md:block" />
                </div>
            </div>

            <div className="grid h-full grid-cols-1 gap-4 py-4 md:grid-cols-2">

                {loading ?  (
                    Array.from({ length: 10 }).map((_, index) => (
                    <div className="flex flex-col items-start gap-4">
                        <Skeleton className="h-full w-full" />
                    </div>
                ))) :(
                    filteredCategories.map((category, index) => (
                        <CategoryCard key={index} title={category} link={encodeURIComponent(category)} />
                    )))  
                }
            </div>
        </div>
    )
}

export default VideoPage