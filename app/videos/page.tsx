"use client"
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import CategoryCard from "@/components/categorycard";
import firebase from "@/firebaseConfig";

const VideoPage = () => {
    const [categories, setCategories] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState<string>('');

    useEffect(() => {
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
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        console.log(categories);
    }, [categories]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filteredCategories = categories.filter((category) =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="w-full">
            <div className="flex py-2 items-center pb-10">
                <h1 className="text-2xl font-bold tracking-tighter items-start">Categories</h1>

                <div className="ml-auto">
                    <Input search={true} value={searchQuery} onChange={handleSearch} type="text" placeholder="Search..." className="hidden md:block w-full placeholder-center dark:bg-transparent transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
                {
                    filteredCategories.map((category, index) => (
                        <CategoryCard key={index} title={category} link={encodeURIComponent(category)} />
                    ))
                }
            </div>
        </div>
    )
}

export default VideoPage