'use client';

import { useState } from 'react';
import { Folder } from 'lucide-react';
import Image from 'next/image';

interface Note {
  id: number;
  title: string;
  desc?: string;
  content: string | React.ReactNode;
}

interface NotesClientProps {
  initialNotes: Note[];
}

export default function NotesClient({ initialNotes }: NotesClientProps) {
  const [selectedNote, setSelectedNote] = useState<Note>(initialNotes[0]);

  const sidebar = (
    <div className="hidden w-64 border-r border-[#000] md:flex flex-col">
      <div className="p-4">
        <Image
          src={'/markintosh-logo.png'}
          alt={'markintosh app icon'}
          width={32}
          height={32}
          style={{
            objectFit: 'contain'
          }}
        />
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 px-2">
          <li className="flex items-center text-sm py-1 px-3 bg-[#4a4848] rounded">
            <Folder className="w-4 h-4 mr-2 text-[#FFCC00]" />
            Overview
          </li>
          <li className="flex items-center text-sm py-1 px-3 rounded hover:bg-[#4a4848]">
            <Folder className="w-4 h-4 mr-2 text-[#FFCC00]" />
            <a
              className="text-[#ebebf5]"
              href="https://github.com/AustinChiatto"
            >
              Source Code
            </a>
          </li>
          <li className="flex items-center text-sm py-1 px-3 rounded hover:bg-[#4a4848]">
            <Folder className="w-4 h-4 mr-2 text-[#FFCC00]" />
            <a
              className="text-[#ebebf5]"
              href="https://austinchiatto.com"
            >
              The Developer
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  const noteList = (
    <div className="hidden lg:flex flex-col w-80 border-r border-[#000] bg-[#1e1e1e]">
      <div className="p-4 border-b border-[#38383A]">
        <h2 className="text-2xl font-semibold">Details</h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        {initialNotes.map((note) => (
          <div
            key={note.id}
            className={`p-4 border-b border-[#38383A] cursor-pointer ${
              selectedNote.id === note.id ? 'bg-[#9d8027] text-[#EBEBF5]' : 'hover:bg-[#1e1e1e]'
            }`}
            onClick={() => setSelectedNote(note)}
          >
            <h3 className="font-semibold">{note.title}</h3>
            <p className={`text-sm ${selectedNote.id === note.id ? 'text-[#EBEBF5]' : 'text-[#98989F]'} truncate`}>
              {typeof note.content === 'string' ? note.content : note.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const noteContent = (
    <div className="flex-1 flex bg-[#1e1e1e] flex-col">
      <div className="p-4 pb-0">
        <h2 className="text-2xl pb-2 font-semibold text-[#EBEBF5]">{selectedNote.title}</h2>
      </div>
      <div className="flex-1 max-w-[35rem] p-4 pt-0 overflow-y-auto bg-[#1e1e1e]">
        {typeof selectedNote.content === 'string'
          ? selectedNote.content.split('\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-[#EBEBF5] mb-4"
              >
                {paragraph}
              </p>
            ))
          : selectedNote.content}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#312f2f]">
      {sidebar}
      {noteList}
      {noteContent}
    </div>
  );
}
