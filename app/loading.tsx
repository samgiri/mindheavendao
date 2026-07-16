import Image from "next/image";

export default function Loading() {
  return (
    <div className="brandLoading" role="status" aria-label="Loading MindHeavenDAO">
      <Image src="/mindheaven-official-logo.png" alt="MindHeavenDAO — The Future of Human Intelligence" width={1536} height={1024} priority unoptimized />
      <span aria-hidden="true" />
    </div>
  );
}
