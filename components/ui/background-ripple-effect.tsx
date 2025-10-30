"use client";
import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRippleEffect = ({
  cellSize = 50,
}: {
  rows?: number;
  cols?: number;
  cellSize?: number;
}) => {
  const [clickedCell, setClickedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [rippleKey, setRippleKey] = useState(0);
  const [dimensions, setDimensions] = useState({ rows: 20, cols: 30 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      const rows = Math.ceil(window.innerHeight / cellSize) + 2;
      const cols = Math.ceil(window.innerWidth / cellSize) + 2;
      setDimensions({ rows, cols });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [cellSize]);

  return (
    <div
      ref={ref}
      className={cn(
        "fixed inset-0 h-screen w-screen overflow-hidden pointer-events-none z-0",
        "lg:ml-64", // Offset for sidebar on desktop
        "[--cell-border-color:rgba(100,100,100,0.3)] [--cell-fill-color:transparent] [--cell-shadow-color:rgba(100,149,237,0.5)]",
        "dark:[--cell-border-color:rgba(255,255,255,0.2)] dark:[--cell-fill-color:transparent] dark:[--cell-shadow-color:rgba(100,149,237,0.6)]",
      )}
    >
      <div className="relative h-full w-full">
        <DivGrid
          key={`base-${rippleKey}`}
          className="opacity-100"
          rows={dimensions.rows}
          cols={dimensions.cols}
          cellSize={cellSize}
          borderColor="var(--cell-border-color)"
          fillColor="var(--cell-fill-color)"
          clickedCell={clickedCell}
          onCellClick={(row, col) => {
            setClickedCell({ row, col });
            setRippleKey((k) => k + 1);
          }}
          interactive
        />
      </div>
    </div>
  );
};

type DivGridProps = {
  className?: string;
  rows: number;
  cols: number;
  cellSize: number;
  borderColor: string;
  fillColor: string;
  clickedCell: { row: number; col: number } | null;
  onCellClick?: (row: number, col: number) => void;
  interactive?: boolean;
};

type CellStyle = React.CSSProperties & {
  ["--delay"]?: string;
  ["--duration"]?: string;
};

const DivGrid = ({
  className,
  rows,
  cols,
  cellSize,
  borderColor,
  fillColor,
  clickedCell,
  onCellClick,
  interactive = true,
}: DivGridProps) => {
  const cells = useMemo(
    () => Array.from({ length: rows * cols }, (_, idx) => idx),
    [rows, cols],
  );

  return (
    <div className={cn("w-full h-full absolute inset-0", className)}>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
          width: "100%",
          height: "100%",
        }}
      >
        {cells.map((idx) => {
          const rowIdx = Math.floor(idx / cols);
          const colIdx = idx % cols;
          const distance = clickedCell
            ? Math.hypot(clickedCell.row - rowIdx, clickedCell.col - colIdx)
            : 0;
          const delay = clickedCell ? Math.max(0, distance * 50) : 0;
          const duration = 200 + distance * 80;

          const style: CellStyle = clickedCell
            ? {
                "--delay": `${delay}ms`,
                "--duration": `${duration}ms`,
              }
            : {};

          return (
            <div
              key={idx}
              className={cn(
                "cell border-[1px] transition-all duration-200 pointer-events-auto cursor-pointer",
                "hover:bg-blue-500/40 hover:scale-[1.15] hover:z-20",
                "dark:hover:bg-blue-400/50",
                "hover:shadow-[0_0_25px_8px_rgba(100,149,237,0.8)_inset]",
                "dark:hover:shadow-[0_0_30px_10px_rgba(100,149,237,0.9)_inset]",
                "hover:border-blue-400/80 dark:hover:border-blue-300/80",
                "hover:brightness-150",
                clickedCell && "animate-cell-ripple",
              )}
              style={{
                backgroundColor: fillColor,
                borderColor: borderColor,
                ...style,
              }}
              onClick={() => interactive && onCellClick?.(rowIdx, colIdx)}
            />
          );
        })}
      </div>
    </div>
  );
};

