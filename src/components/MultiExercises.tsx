import { Button } from "./ui/button";
import LightBulbSVG from '../svg/LightBulbSVG';
import MoneySVG from '../svg/MoneySVG';
import { useEffect, useState } from "react";
import GetCourses, { courses as CourseType } from "@/Api/GetCourses";
import { ScrollArea } from "./ui/scroll-area";
import GetRandomExercise from "@/Api/GetRandomExersice";

export default function MultiExercises() {
    const [courses, setCourses] = useState<CourseType[] | undefined>(undefined);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await GetCourses();
                if (res === false)
                    return
                setCourses(res); // Assuming res is an array of courses
                console.log(res);
            } catch (error) {
                console.error("Failed to fetch courses", error);
            }
        };
        fetchCourses();
    }, []);

    async function selectClass(id: number){
        console.log(await GetRandomExercise(id))
    }

    return (
        <ScrollArea className="h-96">
            <div className="flex flex-col gap-6 w-[75%] mx-auto">   
                <h1 className="text-black text-5xl text-center px-8">SinglePlayer Exercises</h1>

                {courses ? (
                    courses.map((course) => (
                        <Button
                            key={course.id}
                            variant="outline"
                            className="text-1xl py-6 px-4 border border-primary text-primary align-middle text-center items-center justify-center"
                            onClick={() => selectClass(course.id)}
                        >
                            {course.name}
                            
                        </Button>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading courses...</p>
                )}
            </div>
        </ScrollArea>
    );
}
