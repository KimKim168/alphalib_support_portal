import MYContent from "@/components/my-content";
import MyForm from "@/components/my-form";
import {  SidebarMenu } from "@/components/my-service";
import MyVideoGallery from "@/components/my-video-gallery";
const products = [
  { id: 2, title: "Koha Operational and Administrative Skills Series (KOAS) 2", price: 120, image: "assets/images/koha1.png" },
  { id: 3, title: "Koha Operational and Administrative Skills Series (KOAS) 3", price: 150, image: "assets/images/koha2.png" },
  { id: 4, title: "Koha Operational and Administrative Skills Series (KOAS) 3", price: 150, image: "assets/images/koha3.jpg" },
];

export default function Home() {
  return (
    <>
    <div className="max-w-screen-2xl mx-auto min-h-screen pb-14 px-5 xl:px-16">
      <h1 className="text-xl md:text-3xl font-medium text-blue-900 text-center mt-10">Alphalib Support Portal Member Only </h1>
      <div className="grid grid-cols-12 gap-5 mt-10">
        <div className="hidden xl:block col-span-2"><SidebarMenu/></div>
        <div className="col-span-12 xl:col-span-10 space-y-10">
          <MyForm/>
          <MyVideoGallery/>
          <MYContent products={products}/>
        </div>
      </div>
    </div>
    </>
  );
}
