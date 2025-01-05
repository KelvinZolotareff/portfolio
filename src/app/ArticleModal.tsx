import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    content: string;
  };
}

export function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[700px] sm:min-w-[500px] bg-gray-900/90 backdrop-blur-md text-white rounded-lg shadow-lg p-6 overflow-auto"
        style={{ maxHeight: '90vh' }}
      >
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-purple-400">{article.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-gray-300 text-base leading-relaxed mt-3">
          {article.content}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
