import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">✨</div>
        <h1 className="font-heading text-display text-neutral-900">404</h1>
        <p className="mt-4 text-body-lg text-neutral-500 max-w-md mx-auto">
          Oops! This page seems to have been cleaned away. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Go Home
          </Button>
          <Button href="/booking" variant="outline" size="lg">
            Request A Clean
          </Button>
        </div>
      </div>
    </div>
  );
}
