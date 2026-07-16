import Image from "next/image";

export function BrandLogo({ footer=false }:{ footer?:boolean }) {
  return <a href="#home" className={footer?"brandImage footerBrand":"brandImage"} aria-label="MindHeavenDAO home"><Image src="/mindheaven-official-logo.png" alt="MindHeavenDAO — The Future of Human Intelligence" width={1536} height={1024} sizes={footer?"190px":"195px"} priority={!footer} unoptimized /></a>;
}
