export function FeaturedSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl bg-card border border-border animate-pulse">
      <div className="aspect-video rounded-lg bg-border" />
      <div className="space-y-5">
        <div className="h-7 w-48 rounded bg-border" />
        <div className="h-4 w-full rounded bg-border" />
        <div className="h-4 w-3/4 rounded bg-border" />
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-6 w-16 rounded-full bg-border" />
          ))}
        </div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-4 w-2/3 rounded bg-border" />
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <div className="h-10 w-28 rounded-lg bg-border" />
          <div className="h-10 w-28 rounded-lg bg-border" />
        </div>
      </div>
    </div>
  );
}
