import { Avatar } from '@nextui-org/react';

function Introduction() {
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm uppercase tracking-widest text-gray-500">Hello! My name is</span>
      <h1 className="text-6xl font-bold mt-2">MATE ARIANNA VIKTÓRIA</h1>
      <div className="mt-6 relative">
        <Avatar className="w-[250px] h-[280px] ring-4 ring-white" src='/profpic.jfif'>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full w-6 h-6" />
      </div>
    </div>
  );
}

export default Introduction;
