import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtifactDetail } from "./artifact-detail";
import { artifacts, getArtifact } from "@/lib/product-one";

export function generateStaticParams() {
  return artifacts.map((artifact) => ({ slug: artifact.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifact(slug);
  if (!artifact) return {};
  return { title: `${artifact.title} | Producto 1 · TUR-2652`, description: artifact.short };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artifact = getArtifact(slug);
  if (!artifact) notFound();
  return <ArtifactDetail slug={artifact.slug} />;
}
