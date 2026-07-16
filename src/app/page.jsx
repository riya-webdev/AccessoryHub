import BannerSection from "@/components/home/BannerSection/BannerSection";
import Categories from "@/components/home/Categories/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts/FeaturedProducts";
export default function Home() {
  return (
    <main>
      <BannerSection />
            <Categories />
  <FeaturedProducts />
    </main>
  );
}