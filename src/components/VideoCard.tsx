"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Play } from "lucide-react";
import VideoCategories from "./VideoCategories";
import Link from "next/link";
const VideoCard = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div className="flex gap-3 max-md:flex-col">
      <div className="p-4">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=lu_mtzMB_d4`}
          controls
          light
          playIcon={
            <div className="bg-white px-2 py-2 text-red-700 hover:text-rose-500">
              <Play />
            </div>
          }
          className="my-4 h-64 w-64 max-sm:w-full"
        />
      </div>
      <div>
        <Link
          href={`/`}
          className="flex justify-end font-semibold hover:underline"
        >
          All Videos
        </Link>
        <VideoCategories
          category="Siltie"
          title="የቅባት እህሎች እና የጥራጥሬ ምርቶች የቀጥታ ግብይት መመሪያ ጸደቀ"
          url="https://www.youtube.com/watch?v=YK2g78NSrpA&t=55s"
          date=" Oct 14, 2023"
          className="text-pink-600"
        />
        <VideoCategories
          category="Centeral Ethiopia"
          title="የቅባት እህሎች እና የጥራጥሬ ምርቶች የቀጥታ ግብይት መመሪያ ጸደቀ"
          url="https://www.youtube.com/watch?v=YK2g78NSrpA&t=55s"
          date=" Oct 14, 2023"
          className="text-indigo-600"
        />
        <VideoCategories
          category="Ethiopia"
          title="የቅባት እህሎች እና የጥራጥሬ ምርቶች የቀጥታ ግብይት መመሪያ ጸደቀ"
          url="https://www.youtube.com/watch?v=YK2g78NSrpA&t=55s"
          date=" Oct 14, 2023"
          className="text-teal-600"
        />
      </div>
    </div>
  );
};

export default VideoCard;
