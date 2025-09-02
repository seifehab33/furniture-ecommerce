import React from "react";
import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  min?: number;
  max?: number;
  value: [number, number]; // always controlled
  onValueChange: (value: [number, number]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  min = 0,
  max = 2000,
  value,
  onValueChange,
}) => {
  const handleValueChange = (newValue: number[]) => {
    onValueChange([newValue[0], newValue[1]]);
  };

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <div className="w-full bg-filter-background rounded-lg">
      <h3 className="text-base font-bold text-filter-title mb-6">
        Filter by price
      </h3>

      <div className="space-y-6">
        <Slider
          value={value}
          onValueChange={handleValueChange}
          max={max}
          min={min}
          step={1}
          className="w-full"
        />
        <div className="text-sm text-filter-value">
          Price: {formatPrice(value[0])} - {formatPrice(value[1])}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
