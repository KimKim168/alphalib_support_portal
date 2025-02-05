import Image from "next/image";
import Link from "next/link";

export default function MYContent({ products }) {
  return (
    <>
        <div>
          <div className="mb-10">
            <div className="flex items-center justify-between pb-1 mb-4 border-b border-[#03254E]">
              <p className="text-[12px] sm:text-[16px] md:text-[17px] text-white  bg-[#03254E] rounded-tr-full rounded-br-full px-8 py-1">
                Koha
              </p>
            </div>
          </div>
          {/* Check if products exist */}
          {products.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No new content available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
              {products.map((item) => (
                <div className="space-y-3 bg-gray-50 rounded-md">
                <div key={item.id} className="overflow-hidden w-full rounded-md  cursor-pointer">
                  <Link href={`/products/${item.id}`} >
                    <img
                     className="object-cover w-full transition-all duration-300 transform aspect-video hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                <div className="p-2 py-3">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-base leading-tight text-black line-clamp-2 hover:underline dark:text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-1 text-sm text-end">
                     <Link href="#" className="text-[#225da4] hover:underline">Read More</Link>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="mb-10">
            <div className="flex items-center justify-between pb-1 mb-4 border-b border-[#03254E]">
              <p className="text-[12px] sm:text-[16px] md:text-[17px] text-white  bg-[#03254E] rounded-tr-full rounded-br-full px-8 py-1">
                E-Library
              </p>
            </div>
          </div>
          {/* Check if products exist */}
          {products.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No new content available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
              {products.map((item) => (
                <div className="space-y-3 bg-gray-50 rounded-md">
                <div key={item.id} className="overflow-hidden w-full rounded-md  cursor-pointer">
                  <Link href={`/products/${item.id}`} >
                    <img
                     className="object-cover w-full transition-all duration-300 transform aspect-video hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                <div className="p-2 py-3">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-base leading-tight text-black line-clamp-2 hover:underline dark:text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-1 text-sm text-end">
                     <Link href="#" className="text-[#225da4] hover:underline">Read More</Link>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="mb-10">
            <div className="flex items-center justify-between pb-1 mb-4 border-b border-[#03254E]">
              <p className="text-[12px] sm:text-[16px] md:text-[17px] text-white  bg-[#03254E] rounded-tr-full rounded-br-full px-8 py-1">
                DDC
              </p>
            </div>
          </div>
          {/* Check if products exist */}
          {products.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No new content available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
              {products.map((item) => (
                <div className="space-y-3 bg-gray-50 rounded-md">
                <div key={item.id} className="overflow-hidden w-full rounded-md  cursor-pointer">
                  <Link href={`/products/${item.id}`} >
                    <img
                     className="object-cover w-full transition-all duration-300 transform aspect-video hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                <div className="p-2 py-3">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-base leading-tight text-black line-clamp-2 hover:underline dark:text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-1 text-sm text-end">
                     <Link href="#" className="text-[#225da4] hover:underline">Read More</Link>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="mb-10">
            <div className="flex items-center justify-between pb-1 mb-4 border-b border-[#03254E]">
              <p className="text-[12px] sm:text-[16px] md:text-[17px] text-white  bg-[#03254E] rounded-tr-full rounded-br-full px-8 py-1">
                LLC
              </p>
            </div>
          </div>
          {/* Check if products exist */}
          {products.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No new content available.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 ">
              {products.map((item) => (
                <div className="space-y-3 bg-gray-50 rounded-md">
                <div key={item.id} className="overflow-hidden w-full rounded-md  cursor-pointer">
                  <Link href={`/products/${item.id}`} >
                    <img
                     className="object-cover w-full transition-all duration-300 transform aspect-video hover:scale-105"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>
                <div className="p-2 py-3">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-base leading-tight text-black line-clamp-2 hover:underline dark:text-white"
                    >
                      {item.title}
                    </Link>
                    <div className="mt-1 text-sm text-end">
                     <Link href="#" className="text-[#225da4] hover:underline">Read More</Link>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          )}
        </div>
    </>
  );
}
