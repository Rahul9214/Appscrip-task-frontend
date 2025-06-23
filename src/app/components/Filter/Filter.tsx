"use client";

import { useAppDispatch, useAppSelector } from "../../redux/Store";
import { idealForOptions } from "@/constants";
import { ChangeEvent } from "react";
import { setIdealFor } from "../../redux/reducers/filterSlice";
import { Accordion } from "./Accordion/Accordion";
import styles from "./Filter.module.css";

export const Filter = () => {
  const { idealFor } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const handleIdealForChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isOptionPresent = idealFor.includes(value);

    if (isOptionPresent) {
      dispatch(setIdealFor(idealFor.filter((option) => option !== value)));
    } else {
      dispatch(setIdealFor([...idealFor, value]));
    }
  };

  const handleSelectUnselectAll = () => {
    const newList = idealFor.length > 0 ? [] : ["Men", "Women", "Baby & Kids"];
    dispatch(setIdealFor(newList));
  };

  return (
    <div className={styles.filterContainer}>
      {/* Customizable Checkbox (static, non-functional) */}
      <div className={styles.customizableOption}>
        <input type="checkbox" className={styles.checkbox} />
        <span className={styles.customizableText}>Customizable</span>
      </div>

      <div className={styles.divider}></div>

      {/* Working Filter: Ideal For */}
      <Accordion
        header="Ideal For"
        defaultOpen={true}
        selectedFilterValues={idealFor}
        handleSelectUnselectAll={handleSelectUnselectAll}
        options={idealForOptions}
        handleCheckBoxChange={handleIdealForChange}
      />

      <div className={styles.divider}></div>

      {/* Placeholder Accordion Sections */}
      {[
        "Occasion",
        "Work",
        "Fabric",
        "Segment",
        "Suitable For",
        "Raw Material",
        "Pattern",
      ].map((section) => (
        <div key={section}>
          <Accordion
            header={section}
            defaultOpen={false}
            selectedFilterValues={[]}
            handleSelectUnselectAll={() => {}}
            options={[]}
            handleCheckBoxChange={() => {}}
          />
          <div className={styles.divider}></div>
        </div>
      ))}
    </div>
  );
};
