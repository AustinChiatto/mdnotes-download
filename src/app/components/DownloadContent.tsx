import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function DownloadContent() {
  const newTriggers = (
    <>
      <h3 className="font-semibold mb-1">New Syntax Triggers</h3>
      <p className="text-[#98989F]">Use these prefixes followed by a space to style text.</p>
      <ul className="pt-4 flex flex-col gap-2">
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">#</p>
          <p>Title</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">##</p>
          <p>Heading</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">###</p>
          <p>Subheading</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">```</p>
          <p>Monostyled Block</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">&#91;&#93;</p>
          <p>Checklist</p>
        </li>
        <li className="flex items-center gap-2">
          <p className="text-[#ffcc00] w-10">&gt;</p>
          <p>Block Quote</p>
        </li>
      </ul>
    </>
  );

  return (
    <div className="mt-2">
      <div className="relative w-full aspect-video mb-6 rounded-md border border-[#98989F] overflow-hidden">
        <Image
          src={'/markintosh-demo.gif'}
          alt={'markintosh app demo'}
          fill
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <div className="pr-12">
        <p>Markintosh adds markdown formatting to Apple Notes.</p>
        <ul className="pt-6 mb-10">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            <a
              className="hover:underline"
              href="#"
            >
              Download
            </a>
            <p className="text-[#98989F]">for macOS 11+</p>
          </li>
        </ul>
      </div>
      {newTriggers}
    </div>
  );
}
