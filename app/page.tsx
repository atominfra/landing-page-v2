import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dy8hx2xrj/image/upload/v1738880841/science-fiction-1674554_1920_rbgpfi.jpg')",
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-6xl font-extrabold">AtomInfra</h1>
        <p className="text-2xl mt-4">Redefining the Future of Data Centers</p>
      </div>
    </div>
  );
}
