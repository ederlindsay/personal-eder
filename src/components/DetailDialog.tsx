import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface DetailDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageSrc?: string;
  children: React.ReactNode;
}

const DetailDialog: React.FC<DetailDialogProps> = ({ isOpen, onClose, title, imageSrc, children }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
        </DialogHeader>
        {imageSrc && (
          <div className="mt-4 mb-6">
            <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg object-cover" />
          </div>
        )}
        <DialogDescription className="text-lg text-muted-foreground space-y-4">
          {children}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;