import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';

export default function SubmitButton({ lang }: { lang: any }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {lang.generateButton.loading}
        </>
      ) : (
        lang.generateButton.idle
      )}
    </Button>
  );
}
