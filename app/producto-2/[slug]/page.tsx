import { notFound } from "next/navigation";
import { getProductTwoStation, statikStations } from "@/lib/product-two";
import { ProductTwoDetail } from "./product-two-detail";

export function generateStaticParams() { return statikStations.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = getProductTwoStation(slug); return item ? { title: `${item.title} | Producto 2 · TUR-2652`, description: item.short } : {}; }

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = getProductTwoStation(slug); if (!item) notFound();
  return <ProductTwoDetail station={item} />;
}
