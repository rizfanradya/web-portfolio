"use client";
import SkeletonLoading from "@/components/skeletonLoading";
import { retrieveStorage } from "@/utils/retrieveStorage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroImage() {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await retrieveStorage("hero.png");
        setHeroImage(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="md:order-1">
      {heroImage ? (
        <Image src={heroImage} width={275} height={275} alt="Hero Image" />
      ) : (
        <SkeletonLoading size="64" />
      )}
    </div>
  );
}
