export default function Loading() {
  return (
    <div className="container px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-muted rounded w-3/4"></div>
          <div className="h-4 bg-muted rounded w-1/2"></div>
          <div className="space-y-4">
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
