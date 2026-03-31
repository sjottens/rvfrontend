export default function GlobalLoading() {
  return (
    <div className="grid min-h-[50vh] place-items-center">
      <div className="w-40">
        <div className="h-1 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-cyan to-electric" />
        </div>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-white/50">Loading</p>
      </div>
    </div>
  );
}
