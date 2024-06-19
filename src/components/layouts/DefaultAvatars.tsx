export default function DefaultAvatars({
  initialUsername,
}: Readonly<{ initialUsername: string }>) {
  return (
    <div className="w-10 h-10 flex rounded-full bg-zinc-900 text-white text-center p-2 items-center justify-center">
      {initialUsername}
    </div>
  );
}
