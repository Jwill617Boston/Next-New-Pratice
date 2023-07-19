import Image from "next/image";

export default function Home() {
   return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
         <section className="w-screen h-screen flex items-center justify-center ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 1</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 1</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 2</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 2</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 3</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 3</h1>
         </section>
         <section className="w-screen h-screen flex items-center justify-center ">
            <h1 className="m-3 p-4 bg-indigo-500">Section 4</h1>
            <h1 className="m-3 p-4 bg-orange-800">Section 4</h1>
         </section>
      </main>
   );
}
