"use client";

import Image from "next/image";
import Link from "next/link";
import { FollowerPointerCard } from "./following-pointer";

const commonImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function FollowingPointerDemo() {
  const getCardContent = (idx: number) => ({
    title: idx < 3 ? `Success Case #${idx + 1}` : `Achievement #${idx + 1}`,
    description: idx < 3 
      ? `Transformative results in ${['Marketing', 'Technology', 'Design'][idx]}`
      : `Innovation in ${['Development', 'Strategy', 'Implementation'][idx - 3]}`,
    date: `${['Jan', 'Mar', 'Feb', 'Apr', 'May', 'Jun'][idx]} 2024`,
    author: `${['Digital', 'Tech', 'Creative', 'Business', 'Innovation', 'Strategy'][idx]} Team`,
    authorAvatar: `/avatars/avatar-${(idx % 3) + 1}.png` // Update with your avatar paths
  });

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="text-center mb-36">
        <h2 className="font-sans-bold bg-clip-text text-transparent text-center text-6xl lg:text-6xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white">
          Our Success Story
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Discover how we've helped businesses transform their digital presence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[...Array(6)].map((_, idx) => {
          const content = getCardContent(idx);
          
          return (
            <div key={`card-${idx}`} className="w-full mx-auto">
              <FollowerPointerCard
                title={
                  <TitleComponent
                    title={content.author}
                    avatar={content.authorAvatar}
                  />
                }
              >
                <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
                  <div className="w-full aspect-square bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
                    <Image
                      src={commonImage}
                      alt="thumbnail"
                      fill
                      className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="font-bold my-4 text-lg text-zinc-700">{content.title}</h2>
                    <p className="font-normal my-4 text-sm text-zinc-500">{content.description}</p>
                    <div className="flex flex-row justify-between items-center mt-10">
                      <span className="text-sm text-gray-500">{content.date}</span>
                      <Link
                        href={`/cases/${idx + 1}`}
                        className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs hover:bg-gray-800 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </FollowerPointerCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height={20}
      width={20}
      alt="avatar"
      className="rounded-full border-2 border-white"
    />
    <p className="text-sm font-medium text-zinc-700">{title}</p>
  </div>
);