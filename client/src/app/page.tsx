import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-96 p-3 mx-auto text-center">
        <div className="text-blue-100">We have tailwind here!</div>
        <div className="text-blue-200">We have tailwind here!</div>
        <div className="text-blue-300">We have tailwind here!</div>
        <div className="text-blue-400">We have tailwind here!</div>
        <div className="text-blue-500">We have tailwind here!</div>
        <div className="text-blue-600">We have tailwind here!</div>
        <div className="flex justify-center">
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <div className="text-red-600">We have tailwind here!</div>
        <div className="text-red-500">We have tailwind here!</div>
        <div className="text-red-400">We have tailwind here!</div>
        <div className="text-red-300">We have tailwind here!</div>
        <div className="text-red-200">We have tailwind here!</div>
        <div className="text-red-100">We have tailwind here!</div>
      </div>
    </>
  );
}
