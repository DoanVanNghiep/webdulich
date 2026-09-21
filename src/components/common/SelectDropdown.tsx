import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface SelectDropdownOption<T extends string> {
  value: T;
  label: string;
}

interface SelectDropdownProps<T extends string> {
  value: T;
  options: SelectDropdownOption<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
  className?: string;
}

export function SelectDropdown<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  className = '',
}: SelectDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((option) => option.value === value) ?? options[0];

  return (
    <div
      className={`travel-select relative ${className}`}
      tabIndex={0}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="travel-select-trigger w-full flex items-center justify-between gap-3 rounded-full px-4 py-3 text-xs font-bold"
      >
        <span className="truncate">{selected.label}</span>
        <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="travel-select-menu absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-xl border shadow-2xl">
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`travel-select-option w-full px-4 py-2.5 text-left text-xs font-semibold ${
                  isSelected ? 'is-selected' : ''
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
