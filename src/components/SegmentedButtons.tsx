import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

interface SegmentedButtonItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface SegmentedButtonsProps {
  items: SegmentedButtonItem[];
  defaultValue?: string;
  className?: string;
}

const SegmentedButtons: React.FC<SegmentedButtonsProps> = ({ items, defaultValue, className }) => {
  const initialValue = defaultValue || (items.length > 0 ? items[0].value : undefined);

  if (!initialValue) {
    return null; // Retorna nulo se não houver itens para exibir
  }

  return (
    <Tabs defaultValue={initialValue} className={cn("w-full", className)}>
      <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground mb-4">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default SegmentedButtons;