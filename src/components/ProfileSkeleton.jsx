import React from "react";
import Skeleton from "./Skeleton";

function ProfileSkeleton() {
  return (
    <div className="h-full w-full flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-xl p-6 sm:p-8 text-center space-y-6 animate-pulse">
        
        {/* Avatar Skeleton */}
        <Skeleton className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full" />

        {/* Name + Email */}
        <div className="space-y-2">
          <Skeleton className="h-4 sm:h-5 w-32 sm:w-40 mx-auto" />
          <Skeleton className="h-3 sm:h-4 w-40 sm:w-52 mx-auto" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
          <Skeleton className="h-12 sm:h-14 rounded-lg sm:rounded-xl" />
          <Skeleton className="h-12 sm:h-14 rounded-lg sm:rounded-xl" />
          <Skeleton className="h-12 sm:h-14 rounded-lg sm:rounded-xl" />
        </div>

        {/* Button */}
        <Skeleton className="h-10 sm:h-12 w-full rounded-xl" />
      </div>
    </div>
  );
}

export default ProfileSkeleton;
