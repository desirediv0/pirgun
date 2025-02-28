

import { Case } from "@/components/ui/case-with-infinite-scroll";

function InfiniteBrand({ brands }) {
  return (
    <div className="w-full">
      <div className="text-center">

        <h2 className="text-3xl font-bold text-[#00498b]">
          Our Trusted Brands
        </h2>
        <div className="w-24 h-1 bg-[#89bb25] mx-auto mt-3" />

      </div>
      <Case brands={brands} />
    </div>
  );
}

export default InfiniteBrand;