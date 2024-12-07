'use client'

import Navbar from "@/components/Navbar";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { Vortex } from "@/components/ui/vortex";
import Link from "next/link";

export const getRandomBrightColor = () => {
  const colors = [
    'bg-red-400', 'bg-pink-400', 'bg-purple-400', 'bg-indigo-400',
    'bg-blue-400', 'bg-cyan-400', 'bg-teal-400', 'bg-green-400',
    'bg-lime-400', 'bg-yellow-400', 'bg-amber-400', 'bg-orange-400',
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const moods = [
  'Slay Mode', 'Main Character', 'Chill Vibes', 'Hustling', 'Heartbroken',
  'Adventurous', 'Nostalgic', 'Wholesome', 'Romantic', 'Energetic',
  'Lazy', 'Party Mood', 'Mysterious', 'Comedy Central', 'Dark Mood',
  'Thrilling', 'Sad Boi Hours', 'Dreamy', 'Empowered', 'Feel Good',
].map((label) => ({ label, color: getRandomBrightColor() }));

const DiscoverPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <Navbar />

      <Vortex className="flex items-center justify-center">
        <div className="md:w-1/2 mx-8 rounded-xl flex flex-wrap justify-center items-center gap-2 md:gap-4 bg-gray-800/80 px-4 py-8 md:p-8 text-white z-10">
          {moods.map((mood, index) => (
            <Link
              key={index}
              href={`/movies/${mood.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold hover:scale-105 transition-transform ${mood.color}`}
            >
              {mood.label}
            </Link>
          ))}
        </div>
      </Vortex>
      <BackgroundBeams />
    </div>
  );
};

export default DiscoverPage;
