"use client";
import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IMilestoneProps, IRow, TMilestone } from "@/app/types";

export const MilestoneForm = ({ milestones, ...props }: IMilestoneProps) => {
  const [rows, setRows] = useState<IRow[]>([]);
  const {
    register,
    unregister,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (rows.length === 0) {
      addRow();
    }
  }, [rows]);

  function addRow() {
    const random = Math.floor(Math.random() * 100000000);
    let key = "milestone-" + random;
    setRows([...rows, { key }]);
  }

  function removeRow(index: string) {
    if (index !== "default")
      setRows((current) => current.filter((_) => _.key !== index));
  }

  // add localized copy

  return (
    <fieldset>
      {rows.map((row, index) => (
        <div key={row.key} className="flex mb-2">
          <input
            {
              // @ts-ignore
              ...register(`milestones.${row.key}.title`)
            }
            className="w-1/2 border border-slate-300 rounded h-10 pl-2 mb-2"
            placeholder="Title"
          />
          {row.key !== "default" && (
            <input
              {
                // @ts-ignore
                ...register(`milestones.${row.key}.budget`)
              }
              className="w-2/5 border border-slate-300 rounded h-10 pl-2 mb-2 ml-2"
              placeholder="Budget"
              type="number"
            />
          )}
          {row.key === "default" && (
            <input
              {
                // @ts-ignore
                ...register(`milestones.${row.key}.budget`)
              }
              className="w-1/2 border border-slate-300 rounded h-10 pl-2 mb-2 ml-2"
              placeholder="Budget"
              type="number"
            />
          )}
          {row.key !== "default" && (
            <XMarkIcon
              onClick={() => {
                unregister(`milestones.${row.key}.title`);
                unregister(`milestones.${row.key}.budget`);
                removeRow(row.key);
              }}
              className="h-6 ml-2 mt-2.5"
            />
          )}
        </div>
      ))}
      <p
        className="text-right underline mb-8 text-sky-600 mt-2"
        onClick={addRow}
      >
        Add Milestone
      </p>
    </fieldset>
  );
};
