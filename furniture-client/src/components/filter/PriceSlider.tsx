import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { debounce } from "@/lib/debouce";

interface PriceFilterProps {
  min?: number;
  max?: number;
  value: [number, number]; // controlled from parent
  onValueChange: (value: [number, number]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  min = 0,
  max = 2000,
  value,
  onValueChange,
}) => {
  // local state for smooth UI updates
  const [internalValue, setInternalValue] = useState<[number, number]>(value);

  // update local state if parent changes
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // debounced callback
  const debouncedOnValueChange = React.useMemo(
    () => debounce(onValueChange, 300),
    [onValueChange]
  );

  const handleValueChange = (newValue: number[]) => {
    const tupleValue: [number, number] = [newValue[0], newValue[1]];
    setInternalValue(tupleValue);
    debouncedOnValueChange(tupleValue);
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
      <h3 className="text-xs md:text-[16px] font-bold text-filter-title mb-6">
        Filter by price
      </h3>

      <div className="space-y-6">
        <Slider
          value={internalValue}
          onValueChange={handleValueChange}
          max={max}
          min={min}
          step={1}
          className="w-full"
        />
        <div className="text-sm text-filter-value">
          Price: {formatPrice(internalValue[0])} -{" "}
          {formatPrice(internalValue[1])}
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
